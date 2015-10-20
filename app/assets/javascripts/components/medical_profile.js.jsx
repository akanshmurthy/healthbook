/* global React, Tab, ProfilePhoto */

(function(root) {
  'use strict';
  root.MedicalProfile = React.createClass({
    render: function () {
      return(
        <div>
          <ProfilePhoto />
          <br></br>
          <MedicalProfileForm />
          <br></br>
          <Tab />
        </div>
      );
    }
  });
}(this));
