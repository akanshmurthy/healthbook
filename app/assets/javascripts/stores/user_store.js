/* global EventEmitter */
(function(root) {
  'use strict';
  var _user = "";
  var CHANGE_EVENT = "change";
  var resetUser = function (data) {
    _user = data;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    user: function () {
      return _user;
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.UserConstants.USER_RECEIVED:
         var result = resetUser(payload.user);
         root.UserStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
