Chk.TodoApp = (function () {
  'use strict';

  var TodoApp = function () { };
  _(TodoApp.prototype).extend({

    _todos: null,

    init: function () {
      this._todos = new Chk.TodoCollection([
        { name: 'Hello', id: 0 },
        { name: 'Second', id: 1 },
      ]);

      this._render();
    },

    _render: function () {
      React.render(
        <Chk.TodoList todos={this._todos.toJSON()} />,
        document.getElementById('react-container')
      );
    }

  });

  return TodoApp;
})();

(function () {
  'use strict';

  var app = new Chk.TodoApp();
  app.init();
})();
