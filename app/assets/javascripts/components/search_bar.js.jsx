/* global React, ReactRouter, ReturnClass */

(function(root) {
  'use strict';

  root.ReturnClass = React.createClass({
    mixins: [ReactRouter.History],
    postClicked: function(id, body, e){
      e.preventDefault();
      if (body) {
        this.history.pushState(null, "posts/" + id);
      } else {
        this.history.pushState(null, "medical_posts/" + id);
      }
    },
    render: function () {
      var that = this;
      return (
        <ul id="searchresults">
        {
          this.props.matches.map(function(post, i) {
            return <button onClick={this.postClicked.bind(null, post.id, post.body)} id="searchresult" type="button" className="btn btn-primary" key={i} >
              {post.body ? post.body : post.field_name}
            </button>;
          }.bind(this))
        }
       </ul>
      );
    }
  });

  root.SearchBar = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return({matchesAry: []});
    },
    handleUserInput: function(e) {
      var searchString = e.currentTarget.value;
      if (searchString.length > 0) {
        root.StatusFormUtil.getWithBounds({search_string: searchString});
        root.MedicalPostUtil.getWithBounds({search_string: searchString});
      } else {
        // ADD CLEAR ACTIONS FOR STORES
        root.MedicalProfileActions.clearStore("clear");
        root.StatusFormActions.clearStore("clear");
        this.setState({matchesAry: []});
      }
    },
    handleEnter: function(e) {
      if (e.key === "Enter") {
        if (this.state.matchesAry[0].body) {
          this.history.pushState(null, "posts/" + this.state.matchesAry[0].id)
        } else {
          this.history.pushState(null, "medical_posts/" + this.state.matchesAry[0].id)
        }
      }
    },
    componentDidMount: function () {
      root.StatusFormStore.addChangeListener(this._onChange);
      root.MedicalProfileStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.StatusFormStore.removeChangeListener(this._onChange);
      root.MedicalProfileStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
      var fullSearch = root.StatusFormStore.searchPosts();
      fullSearch = fullSearch.concat(root.MedicalProfileStore.searchPosts());
      this.setState({matchesAry: fullSearch});
    },
    handleSubmit: function(e) {
      e.preventDefault();
      this.history.pushState(null, "posts/" + this.state.matchesAry[0].id)
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
