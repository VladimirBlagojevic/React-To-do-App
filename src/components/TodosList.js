import React from 'react';
import Todo from './Todo';

const TodosList= (props) => (
    <div className="todos">
        <ul className="todos__list">
            {
                props.todosArray.length > 0 ? 
                props.todosArray.map( todo => <Todo removeTodo={props.removeTodo} isChecked={props.isChecked} todo={todo} key={todo.todoText}> {todo.todoText}</Todo>) : 
                <h3 className="todos__empty">U have no todos left, add something!</h3>
            }
        </ul>
    </div>
);

export default TodosList;