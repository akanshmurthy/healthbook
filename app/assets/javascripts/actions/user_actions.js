(function(root) {
  'use strict';
  root.UserActions = {
    receiveUser: function (result) {
    root.AppDispatcher.dispatch({
      actionType: root.UserConstants.USER_RECEIVED,
      user: result
    });
  },

  };
}(this));
