import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from'./components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import './App.css';

const list = [
  
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }

  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      // list: list,
      // task: '',
      // id: '',
      // completed: false
      list

    };

  }


addList = (e, item) => {
  e.preventDefault();
  const newList = {
    name: this.state.task,
    task: this.state.task,
    id: Date.now(),
    completed: false  
  };

      this.setState({
     list: [...this.state.list, newList],
     task: ''
      });
};




  // addList = e => {
  //   e.preventDefault();
  //   console.log(e.target);

  //   const newList ={
  //     task: this.state.task,
  //     id: Date.now(),
  //     completed: false

  //   };


  //   this.setState({
  //     list: [...this.state.list, newList],
    
  //   });

  // };


  toggleItem = taskId => {
    this.setState({
      list : this.state.list.map(task => {
        if(taskId === task.id) {
          return {
            ...task,

            completed: !task.completed
          };
        }
        return task;
      })
    });
  };


  handleChanges = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });

    document.getElementById('form1').reset();
};   


  clearTask = e => {
    e.preventDefault();
    this.setState({

      list: this.state.list.filter(task => !task.completed)
    });
  };




  render() {
    return (
      <div className="Container">
      <TodoList list={this.state.list} toggleItem={this.toggleItem} />
        <TodoForm
        addList={this.addList}
        name={this.state.task}
        handleChanges={this.handleChanges}
        task={this.state.task}
        id={this.state.id}
        completed={this.state.completed}
        clearTask={this.clearTask}
    />
        
      </div>
    );
  }

  
}

export default App;

