(function(root) {
  'use strict';
  root.MedicalFileUtil = {
    fetch: function () {
      $.ajax({
        url: 'api/medical_files',
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.MedicalFileActions.receiveUrls(result);
        }
      });
    },
    post: function(data) {
      $.ajax({
        url: 'api/medical_files',
        type: 'post',
        data: {medical_file: data},
        dataType: 'json',
        success: function(result) {
          root.MedicalFileActions.receivePost(result);
        }
      });
    },
    destroy: function(id) {
      $.ajax({
        url: 'api/medical_files/' + id,
        type: 'post',
        data: {_method: 'delete'},
        success: function(result) {
          root.MedicalFileActions.deleteFile(result);
         }
      });
    },
  };
}(this));
