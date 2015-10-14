/* global EventEmitter */
(function(root) {
  'use strict';
  var _post = "";
  var CHANGE_EVENT = "change";
  var resetPost = function (data) {
    _post = data;
  };

  root.StatusFormStore = $.extend({}, EventEmitter.prototype, {
    post: function () {
      return _post;
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.StatusFormConstants.POST_RECEIVED:
         var result = resetPost(payload.post);
         root.StatusFormStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
