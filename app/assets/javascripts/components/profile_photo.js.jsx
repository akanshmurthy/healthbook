/* global React, Tab, PhotoUpload */

(function(root) {
  'use strict';
  root.ProfilePhoto = React.createClass({
    getInitialState: function () {
      return({url: window.CURRENT_USER_PROFILE_PIC});
    },
    handleClick: function () {
      var that = this;
      cloudinary.openUploadWidget({ cloud_name: window.CLOUDINARY_OPTIONS.cloud_name, upload_preset: window.CLOUDINARY_OPTIONS.upload_preset},
      function(error, result) {
        if (result) {
          window.CURRENT_USER_PROFILE_PIC = result[0].url;
          that.setState({url: window.CURRENT_USER_PROFILE_PIC});
          root.UserUtil.post({url_string: result[0].url});
        }
      });
    },
    render: function () {
      return(
        <img onClick={this.handleClick} id="upload_widget_opener" className="img-rounded img-responsive" src={this.state.url}> Profile photo </img>
      );
    }
  });
}(this));
