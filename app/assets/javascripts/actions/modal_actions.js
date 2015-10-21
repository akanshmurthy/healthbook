(function(root) {
  'use strict';
  root.ModalActions = {
    showModal: function (field1, field2) {
      root.AppDispatcher.dispatch({
        actionType: root.ModalConstants.SHOW_MODAL,
        modalData: {field1: field1, field2: field2}
      });
    },
    clearModal: function () {
      root.AppDispatcher.dispatch({
        actionType: root.ModalConstants.CLEAR_MODAL
      });
    },


  };
}(this));
