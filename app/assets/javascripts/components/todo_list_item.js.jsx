Chk.TodoListItem = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      name: React.PropTypes.string.isRequired
    },

    render: function () {
      return <div>{this.props.name}</div>;
    }

  });
})();
