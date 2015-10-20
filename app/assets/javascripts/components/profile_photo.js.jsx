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
          root.UserUtil.post({url_string: result[0].url});
        }
      });
    },
    componentDidMount: function () {
      root.MedicalProfileStore.addChangeListener(this._onChange);
    },
    _onChange: function () {
      this.setState({url: root.MedicalProfileStore.url()});
    },
    componentDidUnmount: function () {
      root.MedicalProfileStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return(
        <img onClick={this.handleClick} id="upload_widget_opener" className="img-rounded img-responsive" src={this.state.url}> Profile photo </img>
      );
    }
  });
}(this));
