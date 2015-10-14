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
  };
}(this));
