import React from 'react';
import Modal from 'react-modal';
import X from '../../public/img/x.png';


const  AddToDo= (props) => {

    const getNewTodo= (e) => {
        e.preventDefault();
        const todo= {
            todoText:e.target.elements.todo.value.trim(),
            checked:false
        };

        if(todo.todoText){
            props.addNewTodo(todo)
            props.hideAddNewTodo();
        }
    }

    return (
        <Modal
        isOpen={props.isOpen}
        contentLabel={'Add new Todo'}
        ariaHideApp={false}
        className="modal"
        closeTimeoutMS={500}
        >
            <button className="modal__close" onClick={props.hideAddNewTodo}><img src={X}></img></button>
            <h1 className="modal__title">Add new todo to the list!</h1>
                <form onSubmit={getNewTodo}>
                    <input className="modal__input" type='text' name='todo' placeholder="Enter todo" autoComplete="off"></input>
                    <button className="modal__btn" >Add</button>
                </form>
        </Modal>  
    );
}
export default AddToDo;