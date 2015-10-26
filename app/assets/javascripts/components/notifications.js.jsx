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
      root.NotificationStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.NotificationStore.removeChangeListener(this._onChange);
    },
    render: function () {
      var that = this;
      return(
         <ul className="list-group">
           {that.state.notifications.map(function(el){
             return <li key={el.id} className="list-group-item">{el.body}
                 <h6>{jQuery.timeago(el.created_at)}</h6>
               </li>;
           })}
         </ul>
      );
    }
  });
}(this));
