/* global ReactRouter, React */
$(function(){
  var root = document.getElementById('main');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    render: function(){
      return (
          <div>
            <header><h1>Healthbook</h1></header>
            {this.props.children}
          </div>
      );
    }
  });
  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={NewsFeed}/>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
