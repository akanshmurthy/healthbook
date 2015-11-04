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
    },
    deleteFile: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalFileConstants.FILE_DELETED,
        url: result
      });
    },
    receiveSearchResults: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalFileConstants.BOUNDED_SEARCH,
        files: result
      });
    },
    clearStore: function() {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalFileConstants.CLEAR_STORE,
      });
    }
  };
}(this));
