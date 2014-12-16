var React = require('react');

var App = React.createClass({

  statics: {
    render: function () {
      React.render(<App />, document.getElementById('app'));
    }
  },

  render: function () {
    return <h1>Hello World</h1>;
  }
});

module.exports = App;
