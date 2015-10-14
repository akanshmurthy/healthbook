/* global React */

(function(root) {
  'use strict';
  root.Posts = React.createClass({
    getInitialState: function () {
      return({posts: []});
    },
    componentDidMount: function () {
      root.StatusFormUtil.get();

      this.setState({posts: });
      debugger;
    },
    render: function () {
      debugger;
      return(
         <ul className="list-group">
           {this.state.posts.map(function(el){
             return <li className="list-group-item">{el}</li>;
           })}
         </ul>
      );
    }
  });
}(this));
