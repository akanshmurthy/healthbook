/* global EventEmitter */
(function(root) {
  'use strict';
  var _posts = [];
  var _searchedPosts = [];
  var CHANGE_EVENT = "change", SINGLE_RECEIVED_EVENT = "single";

  var addOrMergePost = function(data) {
    var existingPost = StatusFormStore.findPostById(data.id);
    if (existingPost){
      $.extend(existingPost, data);
    } else {
      _posts.push(data);
    }
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

  var storeSearchPosts = function(data) {
    _searchedPosts = data;
  };

  root.StatusFormStore = $.extend({}, EventEmitter.prototype, {
    posts: function () {
      return _posts.slice();
    },
    findPostById: function(id){
      var foundPost;
      _posts.forEach(function(post){
        if (post.id == id){
          foundPost = post;
        }
      });
      return foundPost;
    },
    searchPosts: function () {
      return _searchedPosts.slice();
    },
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    addSinglePostReceivedListener: function(callback) {
      this.on(SINGLE_RECEIVED_EVENT, callback);
    },
    removeSinglePostReceivedListener: function(callback) {
      this.removeListener(SINGLE_RECEIVED_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.StatusFormConstants.POST_RECEIVED:
         addOrMergePost(payload.post);
         root.StatusFormStore.emit(CHANGE_EVENT);
         root.StatusFormStore.emit(SINGLE_RECEIVED_EVENT);
         break;
       case window.StatusFormConstants.ALL_NEEDED:
         resetPosts(payload.posts);
         root.StatusFormStore.emit(CHANGE_EVENT);
         break;
       case window.StatusFormConstants.POST_DELETED:
         deletePost(payload.post);
         root.StatusFormStore.emit(CHANGE_EVENT);
         break;
       case window.StatusFormConstants.BOUNDED_SEARCH:
         storeSearchPosts(payload.posts);
         root.StatusFormStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
