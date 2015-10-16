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
    // post: function (data) {
    //   $.ajax({
    //     url: 'api/users/' + current_user.id,
    //     type: 'patch',
    //     data: data,
    //     dataType: 'json',
    //     success: function(result) {
    //       root.UserActions.receiveUser(result);
    //     }
    //   });
    // },
    delete: function () {
      $.ajax({
        url: "/session",
        type: 'post',
        data: {_method: 'delete'},
        success: function (html, status, object) {
          window.location = "session/new";
        }
      });
    }
  };
}(this));
