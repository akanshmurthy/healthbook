/* global EventEmitter */
(function(root) {
  'use strict';

  var _urls = [];
  var _searchFiles = [];
  var CHANGE_EVENT = "change";

  var resetUrls = function(data) {
    _urls = data;
  };

  var addUrl = function(data) {
    _urls.push(data);
  };

  var deleteUrl = function(data) {
    var target = -1;
    _urls.forEach(function(el, idx){
      if (el.id === data.id) {
        target = idx;
      }
    });
    _urls.splice(target, 1);
  };

  var storeSearchFiles = function(data) {
    _searchFiles = data;
  };

  var resetSearchFiles = function() {
    _searchFiles = [];
  };

  root.MedicalFileStore = $.extend({}, EventEmitter.prototype, {
    urls: function () {
      return _urls.slice();
    },
    searchFiles: function () {
      return _searchFiles.slice();
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
       case root.MedicalFileConstants.FILE_DELETED:
         deleteUrl(payload.url);
         root.MedicalFileStore.emit(CHANGE_EVENT);
         break;
       case root.MedicalFileConstants.BOUNDED_SEARCH:
         storeSearchFiles(payload.files);
         root.MedicalFileStore.emit(CHANGE_EVENT);
         break;
       case root.MedicalFileConstants.CLEAR_STORE:
         resetSearchFiles();
         root.MedicalFileStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
