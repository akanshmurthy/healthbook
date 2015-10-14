/* global EventEmitter */
(function(root) {
  'use strict';
  var _posts = [];
  var CHANGE_EVENT = "change";
  var addPost = function (data) {
    _posts.push(data);
  };

  root.StatusFormStore = $.extend({}, EventEmitter.prototype, {
    posts: function () {
      return _posts.slice();
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.StatusFormConstants.POST_RECEIVED:
         var result = addPost(payload.post);
         root.StatusFormStore.emit(CHANGE_EVENT);
         break;
        //  listen for update all
     }
    })
  });
}(this));
