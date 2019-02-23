import React from 'react';
import Header from './Header';
import TodosList from './TodosList';
import AddToDo from './AddToDo';
import AddButton from './AddButton';


export default class TodoApp extends React.Component {
    state={
        todos:[],
        addingTodo: false
    }
    
    componentDidMount() {
        const json= localStorage.getItem('todos');
        const todos= JSON.parse(json);
        if(todos){
            this.setState(() => ({ todos }));
        }
    }

    componentDidUpdate(){
        const json= JSON.stringify(this.state.todos);
        localStorage.setItem('todos', json);
    }
    
    addNewTodo= (todo) => {
            this.setState(prevState => {
                if(prevState.todos.length >= 0 && this.state.todos.findIndex(i => i.todoText === todo.todoText) === -1) {
                    return { 
                        todos: prevState.todos.concat([todo])
                } 
            }   
        });
    }

    removeTodo= todo => {
        this.setState(prevState => {
            return {
                todos:prevState.todos.filter(curent => curent !== todo )
            }
        });
    }

    showAddNewTodo=() => {
        this.setState(() => ({ addingTodo: true}));
    }

    hideAddNewTodo=() => {
        this.setState(() => ({ addingTodo: false}));
    }

    isChecked=(checked) =>{
        this.setState(prevState => {
            return {
                todos:prevState.todos.map(curent => curent.todoText !== checked ? curent : Object.assign({}, curent, { todoText:curent.todoText,checked:!curent.checked }))
            }
        });
    }
    
    render(){
        const title='React Todo App';
        return (
            <div>
                <Header title={title} />
                <TodosList todosArray={this.state.todos} removeTodo={this.removeTodo} isChecked={this.isChecked}/>
                <AddToDo addNewTodo={this.addNewTodo} isOpen={this.state.addingTodo} hideAddNewTodo={this.hideAddNewTodo}/>
                <AddButton showAddNewTodo={this.showAddNewTodo}/>
            </div>
        );
    }
}

