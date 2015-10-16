(function(root) {
  'use strict';
  root.MedicalProfileActions = {
    receiveUrl: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalProfileConstants.URL_RECEIVED,
        url: result
      });
    }
  };
}(this));
