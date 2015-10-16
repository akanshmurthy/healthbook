/* global React, ReactRouter, ReturnClass */

(function(root) {
  'use strict';

  root.ReturnClass = React.createClass({
    mixins: [ReactRouter.History],
    postClicked: function(id, e){
      e.preventDefault();
      this.history.pushState(null, "posts/" + id);
    },
    render: function () {
      var that = this;
      return (
        <ul id="searchresults">
        {
          this.props.matches.map(function(post) {
            return <button onClick={this.postClicked.bind(null, post.id)} id="searchresult" type="button" className="btn btn-primary" key={post.id} >
              {post.body}
            </button>;
          }.bind(this))
        }
       </ul>
      );
    }
  });

  root.SearchBar = React.createClass({
    getInitialState: function () {
      return({matchesAry: []});
    },
    handleUserInput: function(e) {
      var searchString = e.currentTarget.value;
      if (searchString.length > 0) {
        root.StatusFormUtil.getWithBounds({search_string: searchString});
      } else {
        this.setState({matchesAry: []});
      }
    },
    componentDidMount: function () {
      root.StatusFormStore.addChangeListener(this._onChange);
    },
    _onChange: function () {
      this.setState({matchesAry: root.StatusFormStore.searchPosts()});
    },
    handleSubmit: function(e) {
      alert("Nothing found. Sorry!");
    },
    render: function () {
      return(
        <div id="searchbar">
        <form className="navbar-form navbar-left" onSubmit={this.handleSubmit} role="search">
          <div className="form-group">
              <input onInput={this.handleUserInput} type="text" className="form-control" placeholder="Search"/>
          </div>
          <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search"></span></button>
        </form>
        <div>
        <ReturnClass matches={this.state.matchesAry}/>
        </div>
      </div>
      );
    }
  });
}(this));
