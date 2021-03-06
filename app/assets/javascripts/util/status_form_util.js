(function(root) {
  'use strict';
  root.StatusFormUtil = {
    post: function(data) {
      $.ajax({
        url: 'api/posts',
        type: 'post',
        data: data,
        dataType: 'json',
        success: function(result) {
          root.StatusFormActions.receivePost(result);
        }
      });
    },
    getSingle: function(id){
      $.ajax({
        url: 'api/posts/' + id,
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.StatusFormActions.receivePost(result);
        }
      });
    },
    get: function() {
      $.ajax({
        url: 'api/posts',
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.StatusFormActions.receiveAll(result);
        }
      });
    },
    getWithBounds: function(searchString) {
      $.ajax({
        url: 'api/posts',
        type: 'get',
        data: searchString,
        dataType: 'json',
        success: function(result) {
          root.StatusFormActions.receiveSearchResults(result);
        }
      });
    },
    destroy: function(id) {
      $.ajax({
        url: 'api/posts/' + id,
        type: 'post',
        data: {_method: 'delete'},
        success: function(result) {
          root.StatusFormActions.deletePost(result);
         }
      });
    },
  };
}(this));
