Chk.TodoListContainer = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      todos: React.PropTypes.array.isRequired
    },

    onChange: function (event) {
      if (event.target.checked === true) {
        window.alert('Hello');
      }
    },

    render: function () {
      return (
        <div>
          <h4>
            <div className='row checkbox'>
              <label>
                <input type='checkbox' onChange={this.onChange}
                  defaultChecked={true} />
                Show Completed
              </label>
            </div>
          </h4>
          <br />
          <Chk.TodoList {...this.props} todos={this.props.todos} />
        </div>
      );
    }

  });
})();