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
    <div className="buttonDiv">
    <button className="green" onClick={props.addList}>Add Todo</button>
    <button className="red" onClick={props.clearTask}>Clear Completed</button>
    </div>
    </div>
);
};




   
export default TodoForm;


