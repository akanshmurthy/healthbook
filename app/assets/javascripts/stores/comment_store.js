/* global EventEmitter */
(function(root) {
  'use strict';
  var _comments = [];
  var CHANGE_EVENT = "change";
  var _searchComments = [];

  var addComment = function(data) {
    _comments.push(data);
  };

  var getComments = function(data) {
    _comments = data;
  };

  var deleteComment = function(data) {
    var target = -1;
    _comments.forEach(function(el, idx){
      if (el.id === data.id) {
        target = idx;
      }
    });
    _comments.splice(target, 1);
  };

  var storeSearchComments = function(data) {
    _searchComments = data;
  };

  var resetSearchComments = function() {
    _searchComments = [];
  };

  root.CommentStore = $.extend({}, EventEmitter.prototype, {
    comments: function () {
      return _comments.slice();
    },
    searchComments: function () {
      return _searchComments.slice();
    },
    findByPostId: function (id) {
      var foundComments = [];
      _comments.forEach(function(el){
        if (el.post_id == id){
          foundComments.push(el);
        }
      });
      return foundComments;
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
      case root.CommentConstants.COMMENTS_FETCHED:
        getComments(payload.comments);
        root.CommentStore.emit(CHANGE_EVENT);
        break;
      case root.CommentConstants.COMMENT_CREATED:
        addComment(payload.comment);
        root.CommentStore.emit(CHANGE_EVENT);
        break;
      case root.CommentConstants.COMMENT_DELETED:
        deleteComment(payload.comment);
        root.CommentStore.emit(CHANGE_EVENT);
        break;
      case root.CommentConstants.BOUNDED_SEARCH:
        storeSearchComments(payload.comments);
        root.CommentStore.emit(CHANGE_EVENT);
        break;
      case root.CommentConstants.CLEAR_STORE:
        resetSearchComments();
        root.CommentStore.emit(CHANGE_EVENT);
        break;
     }
    })
  });
}(this));
