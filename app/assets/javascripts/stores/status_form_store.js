/* global EventEmitter */
(function(root) {
  'use strict';
  var _posts = [];
  var CHANGE_EVENT = "change";
  var addPost = function(data) {
    _posts.push(data);
  };
  var resetPosts = function(data) {
    _posts = data;
  };
  var deletePost = function(data) {
    var target = -1;
    _posts.forEach(function(el, idx){
      if (el.id === data.id) {
        target = idx;
      }
    });
    _posts.splice(target, target + 1);
  };

  root.StatusFormStore = $.extend({}, EventEmitter.prototype, {
    posts: function () {
      return _posts.slice();
    },
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.StatusFormConstants.POST_RECEIVED:
         addPost(payload.post);
         root.StatusFormStore.emit(CHANGE_EVENT);
         break;
       case window.StatusFormConstants.ALL_NEEDED:
         resetPosts(payload.posts);
         root.StatusFormStore.emit(CHANGE_EVENT);
         break;
       case window.StatusFormConstants.POST_DELETED:
         deletePost(payload.post);
         root.StatusFormStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
