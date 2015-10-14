/* global React */

(function(root) {
  'use strict';
  root.Posts = React.createClass({
    getInitialState: function () {
      return({posts: []});
    },
    _onChange: function () {
      this.setState({posts: root.StatusFormStore.posts() });
    },
    componentDidMount: function () {
      root.StatusFormUtil.get();
      root.StatusFormStore.addChangeListener(this._onChange);
    },
    render: function () {
      return(
         <ul className="list-group">
           {this.state.posts.map(function(el){
             return <li key={el.id} className="list-group-item">{el.body} at {el.created_at}</li>;
           })}
         </ul>
      );
    }
  });
}(this));
