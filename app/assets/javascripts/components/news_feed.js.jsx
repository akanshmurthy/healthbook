/* global React */

(function(root) {
  'use strict';
  root.NewsFeed = React.createClass({
    getInitialState: function () {
      return { user: root.UserStore.user() };
    },
    _onChange: function () {
      this.setState({ user: root.UserStore.user()});
    },
    componentDidMount: function () {
      root.UserUtil.fetch();
      root.UserStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.UserStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return(
        <div>
          <div id="namephoto">
            <h2>Hello, {this.state.user.user_name}!</h2>
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
