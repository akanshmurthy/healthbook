/* global React */

(function(root) {
  'use strict';

  root.ReturnClass = React.createClass({
    render: function () {
      return (
        <ul>
        {
          this.props.matches.map(function(post) {
            var url = "api/posts/"+post.id;
            return <a key={post.id} href={url}>{post.body}</a>;
          })
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


    },
    render: function () {
      return(
        <div>
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
