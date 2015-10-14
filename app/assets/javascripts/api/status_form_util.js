(function(root) {
  'use strict';
  root.StatusFormUtil = {
    post: function (data) {
      $.ajax({
        url: 'api/posts',
        type: 'post',
        data: data,
        dataType: 'json',
        success: function(result) {
          root.StatusFormActions.receivePost(result);
        }
      });
    }
  };
}(this));
