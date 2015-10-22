/* global React, Tab, ProfilePhoto */

(function(root) {
  'use strict';
  root.MedicalProfile = React.createClass({
    render: function () {
      return(
        <div>
          <div className="cover-photo"></div>
          <div className="exclude-cover-photo">
            <div className="profile-photo">
              <ProfilePhoto />
            </div>
            <br></br>
            <MedicalProfileForm />
            <br></br>
            <div className="medical-profile-tabs">
              <Tab />
            </div>
          </div>
      </div>
      );
    }
  });
}(this));
