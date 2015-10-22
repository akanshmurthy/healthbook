//todo: check min height

if(!window._gaq)window._gaq = [];
_gaq.push(['htap._setAccount', 'UA-17533963-1']);
_gaq.push(['htap._trackPageview']);

(function() {

  var $;

  var host = 'https://www.healthtap.com';

  //host = 'http://localhost:3000';
  if( location.hostname == "labs.healthtap.com" || location.hostname == "concierge.healthtap.com" || location.hostname == "qa2.healthtap.com" || location.hostname == "webservices.healthtap.com" ){

    host = location.protocol+'//'+location.host;

  }

  var widgetUrl = host + '/widget/askdoc.json?callback=?';
  var dataUrl = '/widget/askdocdata.json?callback=?';
  var cssUrl = host + '/stylesheets/feelGood/staticPages/widget/askdoc.css?123';
  var widgetContainer;
  var widgetContainerSelector = '#htapWidgetAskdoc';
  var questionContainer;
  var questionContainerSelector = '#htapWidgetAskdoc .htapQuestionContainer';
  var topicsContainer;
  var topicsContainerSelector = '#htapWidgetAskdoc .htapTopicsContainer';
  var textarea;
  var textareaSelector = '#htapQuestionInput';
  var textareaChar;
  var textareaCharSelector = '.htapUsedChar';
  var _readyInterval;
  var settings;
  var runningUrl = window.location.href || 'unknown';
  var typingTimeout;
  var page = 1;
  var xhr;
  var per_page = 10;

//  Google analytics
  var ga = document.createElement('script');
  ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);

  if (window.jQuery === undefined || !jQueryMinVersion('1.9.1')) {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
      "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          scriptLoadHandler();
        }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
    $ = window.jQuery;
    main();
  }


  window.healthtap = window.healthtap || {};
  window.healthtap._toReload = window.healthtap._toReload || [];
  window.healthtap.reloadWidgets = window.healthtap.reloadWidgets || function(){

    var r = window.healthtap._toReload;
    for(var i=0,len=r.length;i<len;i++){
      r();
    }

  };

  window.healthtap._toReload.push(ready);

  // Called once jQuery has loaded
  function scriptLoadHandler() {
    $ = window.jQuery.noConflict(true);
    main();
  }

  function main() {
    //jQuery is loaded now
    _readyInterval = window.setInterval(ready, 25);

    _gaq.push(['htap._trackEvent', 'Widget', 'AskQuestion', runningUrl]);

    var cssLink = $("<link>", {
      rel: "stylesheet",
      type: "text/css",
      href: cssUrl
    });
    cssLink.appendTo('head');
  }

  function ready() {

    widgetContainer = $(widgetContainerSelector);

    if ($ && widgetContainer) {

      //todo: check if the link was removed
      window.clearInterval(_readyInterval);

      //Get custom attributes and add them to the url
      settings = {
        doctor: widgetContainer.attr('data-doctor') || widgetContainer.attr('doctor') || null,
        topic: widgetContainer.attr('data-topic') || widgetContainer.attr('topic') || null,
        question: '',
        //question: 'optional. There could be a question',
        added_doctors: widgetContainer.attr('data-added_doctors') || widgetContainer.attr('added_doctors') || null,
        color: widgetContainer.attr('data-color') || widgetContainer.attr('color') || 'fff',
        just_answers : ( widgetContainer.attr('data-just_answers') || widgetContainer.attr('just_answers') ) == 'true' ? true : false
      };

      var urlSettings = (settings.doctor ? '&doctor=' + encodeURIComponent(settings.doctor) : '')
                      + (settings.topic ? '&added_topics=' + encodeURIComponent(settings.topic) : '')
                      + (settings.just_answers ? '&just_answers=' + encodeURIComponent(settings.just_answers) : '' );

      widgetUrl = widgetUrl + urlSettings;

      $.ajax({
        dataType: "jsonp",
        url: widgetUrl,
        success: gotWidget
      });
    }
  }

  function gotWidget(data) {

    if (data && data.html) {

      $(function(){

        widgetContainer.html(data.html);
        questionContainer = $(questionContainerSelector);
        topicsContainer = $(topicsContainerSelector);
        textarea = $(textareaSelector);
        textareaChar = $(textareaCharSelector);

        widgetContainer.find('.htapLogoBg').css('background-color', settings.color);
        //set binders
        textarea.bind('keyup input propertychange', textareaKeyup);
        widgetContainer.find('#htapAskQuestion').click(askQuestion);
        widgetContainer.find('.htapSeeMore').click(seeMore);

        widgetContainer.find('.htapMainContainer').css('bottom',(widgetContainer.find('.htapFooter').height()+1)+'px');
        getData();

      });

    }
  }

  function getData(e, add) {

    if(e)e.preventDefault();

    if(xhr)xhr.abort();

    if(settings.question.length <= 0 && !add) {
      page = 1;
    }

    var url = host + dataUrl + (settings.doctor ? '&doctor=' + encodeURIComponent(settings.doctor) : '') +
      (settings.topic ? '&added_topics=' + encodeURIComponent(settings.topic) : '') +
      (settings.question ? '&question=' + encodeURIComponent(settings.question) : '') +
      (settings.doctor ? '&added_doctors=' + encodeURIComponent(settings.doctor) : '') +
      '&page=' + page + '&per_page=' + per_page;

    xhr=$.ajax({
      dataType: "jsonp",
      url: url,
      success: add ? addData : showData
    });

  }

  function addData(data) {

    widgetContainer.find('.htapSeeMore').removeClass('loading');
    showData(data, true);

  }

  function showData(data, add) {

    if (data && data.html) {
      widgetContainer.find('.htapSpinner').hide();
      if (!settings.question.length) widgetContainer.find('.htapSeeMore').show();
      if (add) {
        questionContainer.append(data.html);
      } else {
        questionContainer.html(data.html);
      }

      //Bind events
      questionContainer.find('.htapReadHide .arrow').click(toggleAnswer);
      questionContainer.find('.htapQuestionText').click(toggleAnswer);
    }

    if (data && data.topics) {
      topicsContainer.find('.htapTopicsResults').html(data.topics);
      topicsContainer.show();
    } else {
      topicsContainer.hide();
    }

  }

  function seeMore(e) {
    if (e) e.preventDefault();
    var el = $(e.currentTarget);
    if(!el.hasClass('loading')){

      el.addClass('loading');
      page ++;
      getData(null, true);

    }

  }

  function toggleAnswer(e) {

    if(e) e.preventDefault();
    var $readHide = $(this).closest('.htapSection').find('.htapReadHide');

    $readHide[$readHide.hasClass('extended') ? 'removeClass' : 'addClass']('extended');

  }

  function textareaKeyup(e) {

    var limit = 150;
    settings.question = textarea.val();
    textareaChar.text(settings.question.length);
    setLoading();
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(getData, 350);

  }

  function setLoading() {

    questionContainer.html('');
    topicsContainer.hide();
    widgetContainer.find('.htapSeeMore').hide();
    widgetContainer.find('.htapSpinner').show();

  }

  function askQuestion(e) {

    if (e) e.preventDefault();
    if (settings.question.length) {
      widgetContainer.find('.htapWait').show();
      widgetContainer.find('.htapSendAnyway .btn').attr('href', host + '/send_question/?q=' + encodeURIComponent(settings.question));
      widgetContainer.find('.htapSendAnyway').show();
      widgetContainer.find('.htapSeeMore').hide();
      questionContainer.html('');
      topicsContainer.hide();
      widgetContainer.find('.htapSpinner').show();
    } else {
      widgetContainer.find('.htapWait').hide();
      widgetContainer.find('.htapSendAnyway').hide();
      widgetContainer.find('.htapSeeMore').show();
      widgetContainer.find('.htapSpinner').hide();
    }

    getData();
  }

  function jQueryMinVersion(version) {
    var $vrs = window.jQuery.fn.jquery.split('.'),
      min  = version.split('.');
    for (var i=0, len=$vrs.length; i<len; i++) {
      if (min[i] && $vrs[i] < min[i]) {
        return false;
      }
    }
    return true;
  }

})();
