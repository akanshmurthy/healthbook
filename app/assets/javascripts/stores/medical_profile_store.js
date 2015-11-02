/* global EventEmitter */
(function(root) {
  'use strict';
  var _url = window.CURRENT_USER_PROFILE_PIC;
  var _medicalPosts = [];
  var _searchedPosts = [];
  var URL_CHANGE_EVENT = "urlchange";
  var CHANGE_EVENT = "change";
  var SINGLE_RECEIVED_EVENT = "single"

  var resetUrl = function (data) {
    _url = data.url_string;
  };

  var addOrMergePost = function(data) {
    var existingPost = root.MedicalProfileStore.findPostById(data.id);
    if (existingPost){
      $.extend(existingPost, data);
    } else {
      _medicalPosts.push(data);
    }
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
    _medicalPosts.splice(target, 1);
  };

  var storeSearchPosts = function(data) {
    _searchedPosts = data;
  };

  var resetSearchPosts = function() {
    _searchedPosts = [];
  };

  root.MedicalProfileStore = $.extend({}, EventEmitter.prototype, {
    url: function () {
      return _url;
    },
    all: function () {
      return _medicalPosts.slice();
    },
    findPostById: function(id){
      var foundPost;
      _medicalPosts.forEach(function(post){
        if (post.id == id){
          foundPost = post;
        }
      });
      return foundPost;
    },
    searchPosts: function () {
      return _searchedPosts.slice();
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
    addSinglePostReceivedListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeSinglePostReceivedListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.MedicalProfileConstants.URL_RECEIVED:
         resetUrl(payload.url);
         root.MedicalProfileStore.emit(URL_CHANGE_EVENT);
         break;
       case window.MedicalProfileConstants.POST_RECEIVED:
         addOrMergePost(payload.post);
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         root.MedicalProfileStore.emit(SINGLE_RECEIVED_EVENT);
         break;
       case window.MedicalProfileConstants.ALL_NEEDED:
         resetPosts(payload.posts);
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         break;
       case window.MedicalProfileConstants.POST_DELETED:
         deletePost(payload.post);
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         break;
       case window.MedicalProfileConstants.BOUNDED_SEARCH:
         storeSearchPosts(payload.posts);
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         break;
       case window.MedicalProfileConstants.CLEAR_STORE:
         resetSearchPosts();
         root.MedicalProfileStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
