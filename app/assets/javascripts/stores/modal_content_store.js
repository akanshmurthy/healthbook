/* global EventEmitter */
(function(root) {
  'use strict';
  var EMPTY_AND_HIDDEN = {field1: "", field2: "", visible: false};
  var _modalData = $.extend({}, EMPTY_AND_HIDDEN);
  var CHANGE_EVENT = "change";

  var updateModal = function (data) {
    $.extend(_modalData, data);
    _modalData.visible = true;
  };

  var clearModal = function(){
    $.extend(_modalData, EMPTY_AND_HIDDEN);
  };

  root.ModalContentStore = $.extend({}, EventEmitter.prototype, {
    modalData: function () {
      return $.extend({}, _modalData);
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: root.AppDispatcher.register(function(payload){
     switch(payload.actionType){
       case window.ModalConstants.SHOW_MODAL:
         updateModal(payload.modalData);
         root.ModalContentStore.emit(CHANGE_EVENT);
         break;
      case window.ModalConstants.CLEAR_MODAL:
        clearModal();
        root.ModalContentStore.emit(CHANGE_EVENT);
        break;
     }
    })
  });
}(this));
