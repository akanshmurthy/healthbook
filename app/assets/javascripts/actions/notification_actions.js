(function(root) {
  'use strict';
  root.NotificationActions = {
    createNotification: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.NotificationConstants.NOTIFICATION_CREATED,
        notification: result
      });
    },


  };
}(this));
