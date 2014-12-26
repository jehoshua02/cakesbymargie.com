var React = require('react');
var {RouteHandler, Link} = require('react-router');


var Index = React.createClass({

  render: function () {
    return (
      <div className="index">
        <header>
          <h1>Hello World</h1>
        </header>
        <Link to="index">Index</Link>
        <Link to="nested">Nested</Link>
        <RouteHandler />
      </div>
    );
  }

});

module.exports = Index;
