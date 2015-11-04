/* global React */

(function(root) {
  'use strict';
  root.Comments = React.createClass({
    getInitialState: function () {
      return({comments: [], users: []});
    },
    _onChange: function () {
      this.setState({comments: root.CommentStore.findByPostId(this.props.post), users: root.UserStore.users()});
    },
    componentDidMount: function () {
      root.CommentUtil.all();
      root.UserUtil.fetch();
      root.CommentStore.addChangeListener(this._onChange);
      root.UserStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.CommentStore.removeChangeListener(this._onChange);
      root.UserStore.removeChangeListener(this._onChange);
    },
    findUser: function(id) {
      var foundUser = "";
      this.state.users.forEach(function(user){
        if (user.id == id){
          foundUser = user;
        }
      });
      return foundUser.user_name;
    },
    delete: function(id) {
      root.CommentUtil.destroy(id);
    },
    render: function () {
      var filler = "... loading"
      var that = this;
      return(
         <ul>
           {that.state.comments.map(function(el){
             return <li key={el.id}><img className="small-prof-pic" src={window.CURRENT_USER_PROFILE_PIC}/>{el.body}
                 <h6>{
                   jQuery.timeago(el.created_at)} by {that.state.users.length > 0 ? that.findUser(el.user_id) : filler}
                 </h6><a onClick={that.delete.bind(that, el.id)}>Delete</a>
               </li>;
           })}
         </ul>
      );
    }
  });
}(this));
