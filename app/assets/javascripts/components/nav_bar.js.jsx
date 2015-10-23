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
                <li><a id="homepage1" href="#"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"/></a></li>
              </ul>
                <SearchBar />
              <ul className="nav navbar-nav pull-right">
                <li><a id="homepage2" href="#">Home</a></li>
                <li><a id="homepage3" href="#/profile">Profile</a></li>
                <li>

                    <a id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Notifications <span className="badge">5</span> <span className="caret"></span></a>
                      <ul className="dropdown-menu" aria-labelledby="dLabel">
                        <li><a href="#">You just got cancer!</a></li>
                        <li><a href="#">Dr. Who commented on your photo.</a></li>
                        <li><a href="#">It's Dr. Doolittle's birthday today!</a></li>
                        <li><a href="#">This is a reminder about your appointment.</a></li>
                      </ul>

                </li>
                <li><a id="homepage4" href="#/resources">Resources</a></li>
                <li><a id="homepage5" href="#">Messages</a></li>
                <li><a id="homepage6" href="#" onClick={this.logout}>Logout</a></li>
              </ul>
            </div>

          </div>
          </nav>
        </div>
      );
    }
  });
}(this));
