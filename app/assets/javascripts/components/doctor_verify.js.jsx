/* global React, Tab, PhotoUpload */

(function(root) {
  'use strict';
  root.DoctorVerify = React.createClass({
    getInitialState: function () {
      return({url: window.CURRENT_USER_PROFILE_PIC});
    },
    handleClick: function () {
      root.DoctorVerifyUtil.get();
    },
    render: function () {
      return(
        <button className="doctorverify" onClick={this.handleClick}>Verify doctor.</button>
      );
    }
  });
}(this));
