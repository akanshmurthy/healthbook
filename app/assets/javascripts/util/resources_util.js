(function(root) {
  'use strict';
  root.ResourcesUtil = {
    get: function(data, lat, lng) {
      $.ajax({
        url: 'https://api.betterdoctor.com/2014-09-12/doctors?query=' + data + '&location=' + lat + '%2C' + lng + '%2C100' + '&user_key=' + window.BETTER_DOCTOR_OPTIONS.api_key,
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.ResourcesActions.receiveDoctors(result);
        }
      });
    }
  };
}(this));
