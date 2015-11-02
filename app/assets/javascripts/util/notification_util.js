(function(root) {
  'use strict';
  root.NotificationUtil = {
    create: function(data) {
      $.ajax({
        url: 'api/notifications',
        type: 'post',
        dataType: 'json',
        data: data,
        success: function(result) {
          root.NotificationActions.createNotification(result);
        }
      });
    },
    fetch: function() {
      $.ajax({
        url: 'api/notifications',
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.NotificationActions.getNotifications(result);
        }
      });
    },
    destroy: function(id) {
    $.ajax({
      url: 'api/notifications/' + id,
      type: 'post',
      data: {_method: 'delete'},
      success: function(result) {
        root.NotificationActions.deleteNotification(result);
       }
    });
  },
  };
}(this));
