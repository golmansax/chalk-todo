Chk.TodoList = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      todos: React.PropTypes.array.isRequired
    },

    _renderTodo: function (todo) {
      return <Chk.TodoListItem key={todo.id} {...todo} />;
    },

    render: function () {
      return <div>{this.props.todos.map(this._renderTodo)}</div>;
    }

  });
})();
