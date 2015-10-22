/* global ReactRouter, React */
window.createRouter = function(){
  var root = document.getElementById('main');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    render: function(){
      return (
          <div>
            <header>
              <NavBar />
            </header>
            <div className="container">
              {this.props.children}
            </div>
            <ModalManager/>
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={NewsFeed}/>
        <Route path="profile" component={MedicalProfile} />
        <Route path="resources" component={Resources} />
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
};
