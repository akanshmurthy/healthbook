/* global React, Header, MedicalPosts */

(function(root) {
  'use strict';

  root.Header = React.createClass({
    render: function(){
      var that = this;

      return (
          <div className="medical-profile-tabs"> {
          this.props.titles.map(function(title, idx) {
            if (idx === this.props.chosen) {
              var bold = {fontWeight:'bold'};
            } else {
              var bold = {};
            }
            return(
              <button
                type="button"
                style={bold}
                className="btn btn-default"
                onClick={ that.props.onTabSelected.bind(null, idx) }
                key={title}>
                {title}
              </button>
            );
          }.bind(this))
        } </div>
      );
    }
  });

  root.Tab = React.createClass({
    getInitialState: function(){
      var tabs = [
        {title: "Entries", content: <MedicalPosts />},
        {title: "Files", content: <div className="file-holder">Upload photos, videos, and files.</div>},
      ];

      return ({ tabs: tabs, chosen: 0 });
    },

    selectTab: function(idx) {
      this.setState({chosen: idx});
    },

    render: function(){
      var chosenContent = this.state.tabs[this.state.chosen].content;
      var titles = this.state.tabs.map(function(obj) {return obj.title;});
      return (
        <div className ="Tabs">
          <Header
            chosen={ this.state.chosen }
            titles={ titles }
            onTabSelected={ this.selectTab }/>
          <article className ="medical-profile-content">
            {this.state.tabs[this.state.chosen].content}
          </article>
        </div>);
    }
  });

}(this));
