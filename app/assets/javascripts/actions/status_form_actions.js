(function(root) {
  'use strict';
  root.StatusFormActions = {
    receivePost: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.StatusFormConstants.POST_RECEIVED,
        post: result
      });
    },
    receiveAll: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.StatusFormConstants.ALL_NEEDED,
        posts: result
      });
    },
    deletePost: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.StatusFormConstants.POST_DELETED,
        post: result
      });
    },
    receiveSearchResults: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.StatusFormConstants.BOUNDED_SEARCH,
        posts: result
      });
    },
    clearStore: function(data) {
      root.AppDispatcher.dispatch({
        actionType: root.StatusFormConstants.CLEAR_STORE,
        message: data
      });
    }
  };
}(this));
