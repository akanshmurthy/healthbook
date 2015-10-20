(function(root) {
  'use strict';
  root.MedicalPostUtil = {
    post: function(data) {
      $.ajax({
        url: 'api/medical_posts',
        type: 'post',
        data: data,
        dataType: 'json',
        success: function(result) {
          root.MedicalProfileActions.receivePost(result);
        }
      });
    },
    get: function() {
      $.ajax({
        url: 'api/medical_posts',
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.MedicalProfileActions.receiveAll(result);
        }
      });
    },
    destroy: function(id) {
      $.ajax({
        url: 'api/medical_posts/' + id,
        type: 'post',
        data: {_method: 'delete'},
        success: function(result) {
          root.MedicalProfileActions.deletePost(result);
         }
      });
    },
    getWithBounds: function(searchString) {
      $.ajax({
        url: 'api/medical_posts',
        type: 'get',
        data: searchString,
        dataType: 'json',
        success: function(result) {
          root.MedicalProfileActions.receiveSearchResults(result);
        }
      });
    },
  };
}(this));
