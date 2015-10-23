/* global EventEmitter */
(function(root) {
  'use strict';

  var _urls = [];
  var CHANGE_EVENT = "change";

  var resetUrls = function(data) {
    _urls = data;
  };

  var addUrl = function(data) {
    _urls.push(data);
  };

  root.MedicalFileStore = $.extend({}, EventEmitter.prototype, {
    urls: function () {
      return _urls.slice();
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case root.MedicalFileConstants.POST_RECEIVED:
         addUrl(payload.url);
         root.MedicalFileStore.emit(CHANGE_EVENT);
         break;
       case root.MedicalFileConstants.URLS_RECEIVED:
         resetUrls(payload.url);
         root.MedicalFileStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
