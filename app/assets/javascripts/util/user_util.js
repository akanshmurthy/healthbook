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
    post: function (data) {
      $.ajax({
        url: 'api/users/' + window.CURRENT_USER_ID,
        type: 'post',
        data: {_method: 'patch', url: data},
        dataType: 'json',
        success: function(result) {
          root.MedicalProfileActions.receiveUrl(result);
        }
      });
    },
    delete: function () {
      $.ajax({
        url: "/session",
        type: 'post',
        data: {_method: 'delete'},
        success: function (html, status, object) {
          window.location = "/users/new";
        }
      });
    }
  };
}(this));
