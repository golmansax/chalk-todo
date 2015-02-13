Chk.TodoApp = (function () {
  'use strict';

  var TodoApp = function () { };
  _(TodoApp.prototype).extend({

    _todos: null,

    init: function () {
      this._todos = new Chk.TodoCollection([
        { name: 'Cut hair', due_date: '2015-03-04', id: 1 },
        { name: 'Wash car', due_date: '2015-02-20', id: 2 },
        { name: 'Laundry', due_date: '2015-02-19', id: 3 },
        { name: 'Buy groceries', due_date: '2015-02-18', id: 4 },
        { name: 'Start a company', due_date: '2020-01-01', id: 5 }
      ], { parse: true });

      this._todos.on('add remove change', this._render.bind(this));

      this._render();
    },

    _render: function () {
      React.render(
        <Chk.TodoListContainer
          todos={this._todos.toJSON()}
          remove={this._todos.remove.bind(this._todos)}
          update={this._todos.update.bind(this._todos)}
        />,
        window.document.getElementById('react-container')
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
