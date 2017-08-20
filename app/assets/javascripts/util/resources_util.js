(function(root) {
  'use strict';
  root.ResourcesUtil = {
    get: function(data) {
      $.ajax({
        url: 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + data + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + window.BETTER_DOCTOR_OPTIONS.api_key,
        type: 'get',
        dataType: 'json',
        success: function(result) {
          root.ResourcesActions.receiveDoctors(result);
        }
      });
    }
  };
}(this));
