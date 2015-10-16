/* global React */

(function(root) {
  'use strict';
  root.MedicalProfile = React.createClass({
    render: function () {
      return(
        <div>
          <div className="cover-photo"></div>
          <div className="profile-photo"></div>
          <div className="about"><Tab /></div>
          <br></br>
        </div>
      );
    }
  });
}(this));
