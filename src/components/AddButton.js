import React from 'react';

const AddButton= (props) => {
    return (
        <button className="addBtn" onClick={ () => 
            props.showAddNewTodo()
        }> +
        </button> 
    );
}

export default AddButton;