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
    }
  };
}(this));
