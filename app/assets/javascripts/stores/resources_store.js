/* global EventEmitter */
(function(root) {
  'use strict';

  var _doctors = [];
  var CHANGE_EVENT = "change";

  var resetDoctors = function (data) {
    _doctors = data;
  };

  root.ResourcesStore = $.extend({}, EventEmitter.prototype, {
    getDoctors: function () {
      return _doctors.slice();
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case root.ResourcesConstants.RECEIVE_DOCTORS:
         resetDoctors(payload.doctors);
         root.ResourcesStore.emit(CHANGE_EVENT);
         break;
     }
    })
  });
}(this));
