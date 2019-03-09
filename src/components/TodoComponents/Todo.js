import React from 'react';

import './Todo.css';

function Todo (props) {

    return (
        <div className= "new-list" >
        <input className = {`list${props.list.completed ? 'completed': ''}`}   onClick= {() => props.toggleItem(props.list.id)}
            type="checkbox"
        
        /><h3 className= {`list${props.list.completed ? 'completed': ''}`}   onClick= {() => props.toggleItem(props.list.id)}>{props.list.task}</h3>
      
        </div>

    );

}

export default Todo;