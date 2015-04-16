Chk.TodoListContainer = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      todos: React.PropTypes.array.isRequired
    },

    _alert: function () {
      window.alert('hey');
    },

    _onChange: function (event) {
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
                <input
                  type='checkbox'
                  onChange={this._onChange}
                  defaultChecked={true}
                />
                Alert
              </label>

              <button
                onClick={this._alert}
              />
                Show Hide/Competed
            </div>
          </h4>
          <br />
          <Chk.TodoList {...this.props} todos={this.props.todos} />
        </div>
      );
    }

  });
})();
