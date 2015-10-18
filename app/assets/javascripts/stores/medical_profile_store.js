/* global EventEmitter */
(function(root) {
  'use strict';
  var _url = "";
  var CHANGE_EVENT = "change";
  var resetUrl = function (data) {
    _url = data.url_string;
  };

  root.MedicalProfileStore = $.extend({}, EventEmitter.prototype, {
    url: function () {
      return _url;
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.MedicalProfileConstants.URL_RECEIVED:
         resetUrl(payload.url);
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
