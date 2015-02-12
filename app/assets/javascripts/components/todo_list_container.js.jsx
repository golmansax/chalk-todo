Chk.TodoListContainer = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      todos: React.PropTypes.array.isRequired
    },

    render: function () {
      return (
        <div>
          <div className='row checkbox'>
            <label>
              <input type='checkbox' defaultChecked={true} />
              Show completed
            </label>
          </div>
          <Chk.TodoList {...this.props} todos={this.props.todos} />
        </div>
      );
    }

  });
})();
