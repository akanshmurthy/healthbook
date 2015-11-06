/* global React */

(function(root) {
  'use strict';
  root.NewsFeed = React.createClass({
    render: function () {
      return(
        <div>
          <div id="namephoto">
            <h2>Hello, {window.CURRENT_USERNAME}!</h2>
            <ProfilePhoto />
          </div>
          <div id="form-posts">
            <StatusForm/>
            <Posts/>
          </div>
          <div id="widgets">
            <Resources />
          </div>
        </div>
      );
    }
  });
}(this));
