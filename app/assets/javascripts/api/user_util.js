(function(root) {
  'use strict';
  root.UserUtil = {
    fetch: function () {
      $.ajax({
        url: 'api/users',
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.UserActions.receiveUser(result);
        }
      });
    },
    delete: function (id) {
      $.ajax({
        url: 'api/users',
        type: 'delete',
        dataType: 'json',
        success: function(result) {
          root.UserActions.receiveUser(result);
        }
      });
    }
  };
}(this));
