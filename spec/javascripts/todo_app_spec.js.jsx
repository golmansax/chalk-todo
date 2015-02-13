describe('todo_app', function () {
  var app;

  it('renders a preset list of todos', function () {
    app = React.addons.TestUtils.renderIntoDocument(<Chk.TodoApp />);

    var name_els = React.addons.TestUtils.scryRenderedDOMComponentsWithClass(
      app,
      'todo-list-item-name'
    );

    var expected_names = [
      'Cut hair',
      'Wash car',
      'Laundry',
      'Buy groceries',
      'Start a company'
    ];

    console.log(name_els);
    _.each(expected_names, function (name, index) {
      expect(name_els[index].textContent).to.equal(name);
    });
  });
});
