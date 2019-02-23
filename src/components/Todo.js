import React from 'react';
import Remove from '../img/remove.png'


const Todo= (props) => {
    
    const handleChecked= (e) => {
        const checked= e.target.id
        props.isChecked(checked);
    }  
    
    return (
        <li  className="todos__item">
            <input  type="checkbox" defaultChecked={props.todo.checked}  className="hidden-box" id={props.todo.todoText} />
            <label onClick={handleChecked}   htmlFor={props.todo.todoText} className="check--label">
                <span id={props.todo.todoText} className="check--label-box"></span>
                <span id={props.todo.todoText} className="check--label-text">{props.todo.todoText}</span>
            </label>
            <span className="todos__delete">
                <button className="todos__btn" onClick={ () => {
                    props.removeTodo(props.todo);
                }}
                >
                    <img className="todos__remove" src={Remove}></img>
                </button>
            </span>
        </li>
   )  
}

    

export default Todo;