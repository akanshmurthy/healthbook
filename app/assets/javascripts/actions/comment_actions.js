(function(root) {
  'use strict';
  root.CommentActions = {
    receiveComments: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.CommentConstants.COMMENTS_FETCHED,
        comments: result
      });
    },
    receiveComment: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.CommentConstants.COMMENT_CREATED,
        comment: result
      });
    },
    deleteComment: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.CommentConstants.COMMENT_DELETED,
        comment: result
      });
    },
    receiveSearchResults: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.CommentConstants.BOUNDED_SEARCH,
        comments: result
      });
    },
    clearStore: function() {
      root.AppDispatcher.dispatch({
        actionType: root.CommentConstants.CLEAR_STORE,
      });
    }
  };
}(this));
