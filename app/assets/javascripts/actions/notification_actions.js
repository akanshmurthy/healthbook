(function(root) {
  'use strict';
  root.NotificationActions = {
    createNotification: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.NotificationConstants.NOTIFICATION_CREATED,
        notification: result
      });
    },
    getNotifications: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.NotificationConstants.ALL_NOTIFICATIONS,
        notifications: result
      });
    },
    deleteNotification: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.NotificationConstants.DELETE_NOTIFICATION,
        notification: result
      });
    },


  };
}(this));
