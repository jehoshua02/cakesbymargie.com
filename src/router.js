var React = require('react');
var Router = require('react-router');
var {Route, NotFoundRoute, DefaultRoute, Link} = Router;
var Index = require('./components/routes/Index');
var Nested = require('./components/routes/Nested');

var routes = (
  <Route name="index" path="/" handler={Index}>
    <Route name="nested" handler={Nested} />
  </Route>
);

var router = {
  run: function () {
    Router.run(routes, function (Handler) {
      React.render(<Handler />, document.body);
    });
  }
};

module.exports = router;
