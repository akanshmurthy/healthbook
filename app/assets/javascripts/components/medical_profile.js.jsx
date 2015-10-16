/* global React, Tab, PhotoUpload */

(function(root) {
  'use strict';
  root.MedicalProfile = React.createClass({
    getInitialState: function () {
      return({url: ""});
    },
    handleClick: function () {
      var that = this;
      cloudinary.openUploadWidget({ cloud_name: 'dy1hwxj4e', upload_preset: 'a5naqbsw'},
      function(error, result) {
        that.setState({url: result[0].url});
        // root.UserUtil.post({url_string: result[0].url});
      });
    },
    componentDidMount: function () {
      root.MedicalProfileStore.addChangeListener(this._onChange);
    },
    _onChange: function () {
      this.setState({url: root.MedicalProfileStore.url()});
    },
    render: function () {
      return(
        <div>
          <div className="cover-photo"></div>
          <div className="profile-photo" id="upload_widget_opener" onClick={this.handleClick}><img id="uploaded-photo" src={this.state.url}/></div>
          <div className="about"><Tab /></div>
          <br></br>
        </div>
      );
    }
  });
}(this));
