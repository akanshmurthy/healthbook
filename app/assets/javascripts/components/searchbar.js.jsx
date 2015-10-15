/* global React */

(function(root) {
  'use strict';

  root.ReturnClass = React.createClass({
    render: function () {
      return (
        <ul>
        {
          this.props.matches.map(function(post) {
            return <li key={post}>{post}</li>;
          })
        }
        </ul>
      );
    }
  });

  root.SearchBar = React.createClass({
    getInitialState: function () {
      return({strings: ["good", "jelly"], matchesAry: []});
    },
    handleUserInput: function (e) {
      var searchString = e.currentTarget.value;
      var matches = [];
      this.state.strings.forEach(function(el){
        if ((searchString.length !== 0) && (el.slice(0, searchString.length) === searchString)) {
          matches.push(el);
        }
      });
      this.setState({matchesAry: matches});
    },
    render: function () {
      return(
        <div>
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
              <input onInput={this.handleUserInput} type="text" className="form-control" placeholder="Search"/>
          </div>
          <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
        </form>
        <div>
        <ReturnClass matches={this.state.matchesAry}/>
        </div>
      </div>
      );
    }
  });
}(this));
