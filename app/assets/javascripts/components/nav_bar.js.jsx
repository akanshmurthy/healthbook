/* global React */

(function(root) {
  'use strict';
  root.NavBar = React.createClass({
    logout: function (event) {
      event.preventDefault();
      root.UserUtil.delete();
    },
    render: function () {
      return(
        <div>
          <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-menu"
                      aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="collapse-menu">
              <ul className="nav navbar-nav pull-left">
                <li><a href="#">Healthbook</a></li>
              </ul>
                <SearchBar />
              <ul className="nav navbar-nav pull-right">
                <li><a href="#">Home</a></li>
                <li><a href="#/profile">Profile</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#" onClick={this.logout}>Logout</a></li>
              </ul>
            </div>

          </div>
          </nav>
        </div>
      );
    }
  });
}(this));
