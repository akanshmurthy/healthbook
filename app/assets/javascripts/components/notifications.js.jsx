/* global React */

(function(root) {
  'use strict';
  root.Notifications = React.createClass({
    getInitialState: function () {
      return({notifications: []});
    },
    _onChange: function () {
      this.setState({notifications: root.NotificationStore.getNotifications()});
    },
    componentDidMount: function () {
      root.NotificationUtil.fetch();
      root.NotificationStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.NotificationStore.removeChangeListener(this._onChange);
    },
    render: function () {
      var that = this;
      return(
        <a id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Notifications <span className="badge">{this.state.notifications.length}</span> <span className="caret"></span></a>
      );
    }
  });
}(this));


(function(root) {
  'use strict';

  root.NotificationItems = React.createClass({
    getInitialState: function () {
      return({notifications: []});
    },
    _onChange: function () {
      this.setState({notifications: root.NotificationStore.getNotifications()});
    },
    componentDidMount: function () {
      root.NotificationUtil.fetch();
      root.NotificationStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.NotificationStore.removeChangeListener(this._onChange);
    },
    render: function () {
      var that = this;
      return (
        <ul className="dropdown-menu" aria-labelledby="dLabel">
                         <ul className="list-group">
                           {that.state.notifications.reverse().map(function(el){
                             return <li key={el.id} className="list-group-item">{el.body}
                                 <h6>{jQuery.timeago(el.created_at)}</h6>
                               </li>;
                           })}
                         </ul>
                      </ul>
      );
    }
  });
}(this));