// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';
import Todo from './Todo';



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

  
]


const TodoList = props => {
 return (
  <div className="TodoList1">
  <h2 className="titleHeader">Todo List:</h2>
  <div className="todo-list">
  {props.list.map((individualList, index) =>(
    <Todo key={individualList.id} list={individualList} toggleItem={props.toggleItem} />
  ))}
  </div>
</div>
 );
};

export default TodoList;