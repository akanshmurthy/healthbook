(function(root) {
  'use strict';
  root.ResourcesUtil = {
    get: function(data) {
      $.ajax({
        url: 'https://api.betterdoctor.com/2014-09-12/doctors?query=' + data + "&user_key=" + window.BETTER_DOCTOR_API_KEY,
        //navigator.geolocation
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.ResourcesActions.receiveDoctors(result);
        }
      });
    }
  };
}(this));
