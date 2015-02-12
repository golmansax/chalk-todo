Chk.TodoListItem = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      name: React.PropTypes.string.isRequired
    },

    render: function () {
      return (
        <li className='list-group-item row'>
          <div className='col-md-9'>
            <h3>{this.props.name}</h3>
            <p>
              <strong>Due date: </strong>
              {this.props.due_date.calendar()}
            </p>
          </div>
          <div className='col-md-3'>
            <button className='btn btn-lg btn-block btn-primary'>
              Mark Done
            </button>
            <button
              className='btn btn-lg btn-block btn-default'
              onClick={this.props.remove}
            >
              Remove
            </button>
          </div>
        </li>
      );
    }

  });
})();
