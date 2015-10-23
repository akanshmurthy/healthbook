(function(root) {
  'use strict';
  root.MedicalFileActions = {
    receiveUrls: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalFileConstants.URLS_RECEIVED,
        url: result
      });
    },
    receivePost: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalFileConstants.POST_RECEIVED,
        url: result
      });
    }
  };
}(this));
