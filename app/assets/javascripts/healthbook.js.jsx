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
              <h1>Healthbook</h1>
              {this.props.children}
            </div>
          </div>
      );
    }
  });
  var routes = (
      <Route path="/" component={App}>
        <IndexRoute components={{comp1: NewsFeed, comp2: StatusForm, comp3: Posts}}/>
        <Route path="posts/:id" components={{comp1: NewsFeed, comp2: StatusForm, comp3: Posts, comp4: ShowModal}}/>
        <Route path="profile" component={MedicalProfile} />
        <Route path="medical_posts/:id" components={{comp1: MedicalProfile, comp2: MedShowModal}}/>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
};
