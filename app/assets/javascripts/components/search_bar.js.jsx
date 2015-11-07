/* global React, ReactRouter, ReturnClass */

(function(root) {
  'use strict';

  root.ReturnClass = React.createClass({
    postClicked: function(post, e){
      e.preventDefault();
      if (post.body) {
        ModalActions.showModal(post.body);
      } else if (post.field_name) {
        ModalActions.showModal(post.field_name, post.field_value);
      } else if (post.title) {
        var link = <a href={post.url_string}> Link </a>
        ModalActions.showModal(post.title, link);
      }
    },
    render: function () {
      var that = this;
      return (
        <ul id="searchresults">
        {
          this.props.matches.map(function(post, i) {
            if (post.body) {
              return <button onClick={this.postClicked.bind(null, post)} id="searchresult" type="button" className="btn btn-primary" key={i} >
                {post.body}
              </button>;
            } else if (post.field_name) {
              return <button onClick={this.postClicked.bind(null, post)} id="searchresult" type="button" className="btn btn-primary" key={i} >
                {post.field_name}
              </button>;
            } else if (post.title) {
              return <button onClick={this.postClicked.bind(null, post)} id="searchresult" type="button" className="btn btn-primary" key={i} >
                {post.title}
              </button>;
            }
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
        root.CommentUtil.getWithBounds({search_string: searchString});
        root.MedicalFileUtil.getWithBounds({search_string: searchString});
      } else {
        root.MedicalProfileActions.clearStore("clear");
        root.StatusFormActions.clearStore("clear");
        root.CommentActions.clearStore("clear");
        root.MedicalFileActions.clearStore("clear");
        this.setState({matchesAry: []});
      }
    },
    componentDidMount: function () {
      root.StatusFormStore.addChangeListener(this._onChange);
      root.MedicalProfileStore.addChangeListener(this._onChange);
      root.CommentStore.addChangeListener(this._onChange);
      root.MedicalFileStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.StatusFormStore.removeChangeListener(this._onChange);
      root.MedicalProfileStore.removeChangeListener(this._onChange);
      root.CommentStore.removeChangeListener(this._onChange);
      root.MedicalFileStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
      var fullSearch = root.StatusFormStore.searchPosts();
      fullSearch = fullSearch.concat(root.MedicalProfileStore.searchPosts());
      fullSearch = fullSearch.concat(root.CommentStore.searchComments());
      fullSearch = fullSearch.concat(root.MedicalFileStore.searchFiles());
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
        <form id="searchform" className="navbar-form navbar-left" onSubmit={this.handleSubmit} role="search">
          <div className="form-group">
              <input onInput={this.handleUserInput} type="text" className="form-control" placeholder="Search your data."/>
          </div>
          <button id="searchbutton" type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search grey"></span></button>
        </form>
        <div>
        <ReturnClass matches={this.state.matchesAry}/>
        </div>
      </div>
      );
    }
  });
}(this));
