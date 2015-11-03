(function(root) {
  'use strict';
  root.UserActions = {
    receiveUsers: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.UserConstants.USERS_RECEIVED,
        users: result
      });
    },

  };
}(this));
