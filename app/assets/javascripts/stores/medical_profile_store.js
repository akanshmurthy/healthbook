/* global EventEmitter */
(function(root) {
  'use strict';
  var _url = window.CURRENT_USER_PROFILE_PIC;
  var _medicalPosts = "";
  var URL_CHANGE_EVENT = "urlchange";
  var CHANGE_EVENT = "change";

  var resetUrl = function (data) {
    _url = data.url_string;
  };

  var addPost = function (data) {
    _medicalPosts.push(data);
  };

  var resetPosts = function (data) {
    _medicalPosts = data;
  };

  var deletePost = function(data) {
    var target = -1;
    _medicalPosts.forEach(function(el, idx){
      if (el.id === data.id) {
        target = idx;
      }
    });
    _medicalPosts.splice(target, target + 1);
  };

  root.MedicalProfileStore = $.extend({}, EventEmitter.prototype, {
    url: function () {
      return _url;
    },
    all: function () {
      return _medicalPosts;
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    addUrlChangeListener: function (callback) {
      this.on(URL_CHANGE_EVENT, callback);
    },
    removeUrlChangeListener: function(callback){
      this.removeListener(URL_CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.MedicalProfileConstants.URL_RECEIVED:
         resetUrl(payload.url);
         root.MedicalProfileStore.emit(URL_CHANGE_EVENT);
         break;
       case window.MedicalProfileConstants.POST_RECEIVED:
         addPost(payload.post);
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         break;
       case window.MedicalProfileConstants.ALL_NEEDED:
         resetPosts(payload.posts);
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         break;
       case window.MedicalProfileConstants.POST_DELETED:
         deletePost(payload.post);
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
