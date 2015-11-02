/* global EventEmitter */
(function(root) {
  'use strict';

  var _notifications = [];
  var CHANGE_EVENT = "change";

  var resetNotification = function (data) {
    _notifications = data;
  };

  var addNotification = function (data) {
    _notifications.push(data);
  };

  var deleteNotification = function(data) {
    var target = -1;
    _notifications.forEach(function(el, idx){
      if (el.id === data.id) {
        target = idx;
      }
    });
    _notifications.splice(target, 1);
  };

  root.NotificationStore = $.extend({}, EventEmitter.prototype, {
    getNotifications: function () {
      return _notifications.slice();
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
      case root.NotificationConstants.NOTIFICATION_CREATED:
         addNotification(payload.notification);
         root.NotificationStore.emit(CHANGE_EVENT);
         break;
      case root.NotificationConstants.ALL_NOTIFICATIONS:
         resetNotification(payload.notifications);
         root.NotificationStore.emit(CHANGE_EVENT);
         break;
      case root.NotificationConstants.DELETE_NOTIFICATION:
         deleteNotification(payload.notification);
         root.NotificationStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
