import React from 'react';



const TodoForm = props => {
return (
    <div className="form">
    <form id="form1" onSubmit = {props.addList}>
    <input  className="input"
      
       type="text"
        value={props.task}
        name='task'
        onChange={props.handleChanges}
        placeholder="...todo"
    />
    </form>
    <button  onClick={props.addList}>Add Todo</button>
    <button onClick={props.clearTask}>Clear Completed</button>
    </div>
);
};




   
export default TodoForm;


