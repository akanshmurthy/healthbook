(function(root) {
  'use strict';
  root.MedicalProfileActions = {
    receiveUrl: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalProfileConstants.URL_RECEIVED,
        url: result
      });
    },
    receivePost: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalProfileConstants.POST_RECEIVED,
        post: result
      });
    },
    receiveAll: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalProfileConstants.ALL_NEEDED,
        posts: result
      });
    },
    deletePost: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalProfileConstants.POST_DELETED,
        post: result
      });
    },
    receiveSearchResults: function (result) {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalProfileConstants.BOUNDED_SEARCH,
        posts: result
      });
    },
    clearStore: function() {
      root.AppDispatcher.dispatch({
        actionType: root.MedicalProfileConstants.CLEAR_STORE,
      });
    }
  };
}(this));
