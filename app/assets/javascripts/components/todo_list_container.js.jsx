Chk.TodoListContainer = (function () {
  'use strict';

  return React.createClass({

    propTypes: {
      todos: React.PropTypes.array.isRequired
    },

    filterList: function(event){
      if (event.target.checked){
        var updatedList= this.props.todos 
        _.filter(updatedList, function(todo){return todo.complete_date})

      this.setState({todos:updatedList});
      }
    },

    getInitialState: function(){
      return{
        todos: this.props.todos
      }
    },


    render: function () {
      return (
        <div>
          <h4>
            <div className='row checkbox'>
              <label>
                <input type='checkbox' defaultChecked={true} onChange={this.filterList}/>
                Show completed
              </label>
            </div>
          </h4>
          <br />
          <Chk.TodoList {...this.props} todos={this.state.todos} />
        </div>
      );
    }

  });
})();
