Chk.TodoListContainer = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      todos: React.PropTypes.array.isRequired
    },

    getInitialState: function () {
      return {
        show_all: true
      };
    },

    _onChange: function (event) {
      if (event.target.checked === true) {
        window.alert('Hello');
      }
    },

    _toggleComplete: function () {
      var newState = this.state.show_all ? false : true;
      this.setState({
        show_all: newState
      });
    },

    _renderToggleButton: function () {
      var glyphClass = this.state.show_all ? 'glyphicon glyphicon-remove' : 'glyphicon glyphicon-ok';
      var btnAction = this.state.show_all ? 'Hide' : 'Show';
      return (
        <button
          onClick={this._toggleComplete}
          className='btn btn-lg btn-default'
        >
          {btnAction} completed!
          <span className={glyphClass} ></span>
        </button>
      );
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
              {this._renderToggleButton()}
            </div>
          </h4>
          <br />
          <Chk.TodoList {...this.props} todos={this.props.todos} />
        </div>
      );
    }

  });
})();
