(function(root) {
  'use strict';
  root.DoctorVerifyUtil = {
    get: function(data) {
      $.ajax({
        url: "https://www.doximity.com/oauth/authorize?client_id=151a4c7bb83b38c0d06be96798aeeaf7df8b04e36ca3b561280fc4016b228160&response_type=code&redirect_uri=http://www.healthbook.xyz/callback&scope=basic%20colleagues&type=verify",
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
