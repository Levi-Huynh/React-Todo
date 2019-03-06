import React from 'react';

import './Todo.css';

function Todo (props) {

    return (
        <div className="new-list">
        <h4 className = {`${props.list.completed ? 'completed': ''}`}   onClick= {() => props.toggleItem(props.list.id)}>{props.list.task}
          
        </h4>
        </div>

    );

}

export default Todo;