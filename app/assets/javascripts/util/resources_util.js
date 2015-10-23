(function(root) {
  'use strict';
  root.ResourcesUtil = {
    get: function(data) {
      $.ajax({
        url: 'https://api.betterdoctor.com/2014-09-12/doctors?query=' + data + "&user_key=be702bdc648a29b546eb0f0e99ccd34e",
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
