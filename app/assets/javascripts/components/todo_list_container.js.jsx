Chk.TodoListContainer = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      todos: React.PropTypes.array.isRequired
    },

    render: function () {
      return (
        <div>
          <h4>
            <div className='row checkbox'>
              <label>
                <input type='checkbox' defaultChecked={true} />
                Show completed
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
