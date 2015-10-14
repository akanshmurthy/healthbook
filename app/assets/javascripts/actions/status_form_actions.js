(function(root) {
  'use strict';
  root.StatusFormActions = {
    receivePost: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.StatusFormConstants.POST_RECEIVED,
        post: result
      });
      // update all action dispatches all posts
    },

  };
}(this));
