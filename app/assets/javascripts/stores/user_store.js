/* global EventEmitter */
(function(root) {
  'use strict';
  var _users = [];
  var CHANGE_EVENT = "change";
  var resetUsers = function (data) {
    _users = data;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    user: function () {
      var currentUser;
      _users.forEach(function(user){
        if (user.id == window.CURRENT_USER_ID){
          currentUser = user;
        }
      });
      return currentUser;
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.UserConstants.USERS_RECEIVED:
         var result = resetUsers(payload.users);
         root.UserStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
