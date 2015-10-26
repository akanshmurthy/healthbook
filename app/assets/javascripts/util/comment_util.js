(function(root) {
  'use strict';
  root.CommentUtil = {
    all: function() {
      $.ajax({
        url: '/api/comments',
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.CommentActions.receiveComments(result);
        }
      });
    },
    add: function(data) {
      $.ajax({
        url: '/api/comments',
        type: 'post',
        data: data,
        dataType: 'json',
        success: function(result) {
          root.CommentActions.receiveComment(result);
        }
      });
    },
    destroy: function(id) {
      $.ajax({
        url: 'api/comments/' + id,
        type: 'post',
        data: {_method: 'delete'},
        success: function(result) {
          root.CommentActions.deleteComment(result);
         }
      });
    },
  };
}(this));
