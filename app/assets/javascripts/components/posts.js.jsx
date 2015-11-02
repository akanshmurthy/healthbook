/* global React */

(function(root) {
  'use strict';
  root.Posts = React.createClass({
    getInitialState: function () {
      return({posts: []});
    },
    _onChange: function () {
      this.setState({posts: root.StatusFormStore.posts()});
    },
    componentDidMount: function () {
      root.StatusFormUtil.get();
      root.StatusFormStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.StatusFormStore.removeChangeListener(this._onChange);
    },
    delete: function(id) {
      root.StatusFormUtil.destroy(id);
    },
    render: function () {
      var that = this;
      return(
         <ul className="list-group">
           {that.state.posts.reverse().map(function(el){
             return(
                <li key={el.id} className="list-group-item"><img className="small-prof-pic" src={window.CURRENT_USER_PROFILE_PIC}/>{el.body}
                 <h6>{
                   jQuery.timeago(el.created_at)}
                 </h6>
                 <a onClick={that.delete.bind(that, el.id)}>Delete</a>
                 <hr/>
                 <Comments post={el.id} />
                 <br/>
                 <CommentsForm post={el.id} user={el.user_id}/>
               </li>)
           })}
         </ul>
      );
    }
  });
}(this));
