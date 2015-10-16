/* global React, Header, Table */

(function(root) {
  'use strict';

  root.Header = React.createClass({
    render: function(){
      var that = this;

      return (
        <ul className="medical-profile-tabs"> {
          this.props.titles.map(function(title, idx) {
            if (idx === this.props.chosen) {
              var bold = {fontWeight:'bold'};
            } else {
              var bold = {};
            }
            return(
              <button
                style={bold}
                onClick={ that.props.onTabSelected.bind(null, idx) }
                key={title}>
                {title}
              </button>
            );
          }.bind(this))
        } </ul>
      );
    }
  });

  root.Tab = React.createClass({
    getInitialState: function(){
      var tabs = [
        {title: "About", content: <Table />},
        {title: "Photos", content: "Photos sub-component goes here"},
        {title: "Videos", content: "Videos sub-component goes here"}
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
