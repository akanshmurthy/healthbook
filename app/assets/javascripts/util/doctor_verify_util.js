(function(root) {
  'use strict';
  root.DoctorVerifyUtil = {
    get: function(data) {
      $.ajax({
        url: "https://www.doximity.com/oauth/authorize?client_id=" + window.DOXIMITY_OPTIONS.client_id + "&response_type=code&redirect_uri=http://www.healthbook.xyz/callback&scope=basic%20colleagues&type=verify",
        type: 'get',
        dataType: 'json',
        success: function(result) {
          debugger;
          console.log(result)
        }
      });
    }
  };
}(this));
