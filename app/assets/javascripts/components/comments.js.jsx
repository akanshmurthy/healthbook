/* global React */

(function(root) {
  'use strict';
  root.Comments = React.createClass({
    getInitialState: function () {
      return({comments: []});
    },
    _onChange: function () {
      this.setState({comments: root.CommentStore.findByPostId(this.props.post)});
    },
    componentDidMount: function () {
      root.CommentUtil.all();
      root.CommentStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.CommentStore.removeChangeListener(this._onChange);
    },
    delete: function(id) {
      root.CommentUtil.destroy(id);
    },
    render: function () {
      var that = this;
      return(
         <ul>
           {that.state.comments.map(function(el){
             return <li key={el.id}><img className="small-prof-pic" src={window.CURRENT_USER_PROFILE_PIC}/>{el.body}
                 <h6>{
                   jQuery.timeago(el.created_at)} by {el.user_id.user_name}
                 </h6><a onClick={that.delete.bind(that, el.id)}>Delete</a>
               </li>;
           })}
         </ul>
      );
    }
  });
}(this));
