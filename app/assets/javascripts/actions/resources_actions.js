(function(root) {
  'use strict';
  root.ResourcesActions = {
    receiveDoctors: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.ResourcesConstants.RECEIVE_DOCTORS,
        doctors: result.data
      });
    },


  };
}(this));
