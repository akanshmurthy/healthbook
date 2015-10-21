/* global React, ReactRouter, ReturnClass */

(function(root) {
  'use strict';

  root.ReturnClass = React.createClass({
    postClicked: function(post, e){
      e.preventDefault();
      if (post.body) {
        ModalActions.showModal(post.body);
      } else {
        ModalActions.showModal(post.field_name, post.field_value);
      }
    },
    render: function () {
      var that = this;
      return (
        <ul id="searchresults">
        {
          this.props.matches.map(function(post, i) {
            return <button onClick={this.postClicked.bind(null, post)} id="searchresult" type="button" className="btn btn-primary" key={i} >
              {post.body ? post.body : post.field_name}
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
        root.MedicalPostUtil.getWithBounds({search_string: searchString});
      } else {
        root.MedicalProfileActions.clearStore("clear");
        root.StatusFormActions.clearStore("clear");
        this.setState({matchesAry: []});
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
      if (this.state.matchesAry[0].body) {
        ModalActions.showModal(this.state.matchesAry[0].body);
      } else {
        ModalActions.showModal(this.state.matchesAry[0].field_name, this.state.matchesAry[0].field_value);
      }
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
