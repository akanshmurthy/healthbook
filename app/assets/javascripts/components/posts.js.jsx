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
    componentDidUnmount: function () {
      root.StatusFormStore.removeChangeListener(this._onChange);
    },
    delete: function(id) {
      root.StatusFormUtil.destroy(id);
      // root.StatusFormStore.addChangeListener(this._onChange);
     },

    render: function () {
      var that = this;
      return(
         <ul className="list-group">
           {that.state.posts.map(function(el){
             return <li key={el.id} className="list-group-item">{el.body}
                 <h6>{
                   jQuery.timeago(el.created_at)}
                 </h6><a href="#" onClick={that.delete.bind(that, el.id)}>Delete</a>
               </li>;
           })}
         </ul>
      );
    }
  });
}(this));
