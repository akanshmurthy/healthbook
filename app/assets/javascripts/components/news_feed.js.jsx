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
    componentDidUnmount: function () {
      root.UserStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return(
        <div>
          Hello, {this.state.user.user_name}!
        </div>
      );
    }
  });
}(this));
