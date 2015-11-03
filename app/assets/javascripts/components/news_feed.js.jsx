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
          <StatusForm/>
          <Posts/>
          <Resources />
        </div>
      );
    }
  });
}(this));
