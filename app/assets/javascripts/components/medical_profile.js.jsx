/* global React, Tab, PhotoUpload */

(function(root) {
  'use strict';
  root.MedicalProfile = React.createClass({
    handleClick: function () {
      cloudinary.openUploadWidget({ cloud_name: 'demo', upload_preset: 'a5vxnzbp'},
      function(error, result) { console.log(error, result); });
    },
    render: function () {
      return(
        <div>
          <div className="cover-photo"></div>
          <div className="profile-photo" id="upload_widget_opener" onClick={this.handleClick}></div>
          <div className="about"><Tab /></div>
          <br></br>
        </div>
      );
    }
  });
}(this));
