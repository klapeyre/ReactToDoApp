import React, { Component } from 'react';
import ToDo from './ToDo';
import './ToDoList.css';
import AddToDo from './AddToDo';

let count = 2;

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addToDo = this.addToDo.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
        this.completeToDo = this.completeToDo.bind(this);
        this.updateCache = this.updateCache.bind(this);
        this.getInitialCache = this.getInitialCache.bind(this);
        this.sortToDos = this.sortToDos.bind(this);
    }

    componentDidMount() {
        const cachedTodos = this.getInitialCache();
        const updatedTodos = cachedTodos.map(todo => {
            let val = new Date(todo.sortDate);
            todo.sortDate = val;
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    getInitialCache() {
        console.log("Getting cache...");
        if (localStorage.hasOwnProperty("count")) {
            let cval = localStorage.getItem("count");
            count = cval;
        }

        if (localStorage.hasOwnProperty(this.props.listName)) {
            let val = localStorage.getItem(this.props.listName);
            try {
                val = JSON.parse(val);
                return val;
            } catch (e) {
                return [];
            }
        } else {
            return [];
        }
    }

    updateCache(listName, todos) {
        localStorage.setItem(listName, JSON.stringify(todos));
        localStorage.setItem("count", count);
    }

    removeToDo(toDoId) {
        const filteredList = this.state.todos.filter(todo => {
            return todo.id !== toDoId;
        });
        this.setState({ todos: filteredList });
        this.updateCache(this.props.listName, filteredList);
    }

    completeToDo(toDoId) {
        const mappedList = this.state.todos.map(todo => {
            if (toDoId === todo.id) {
                todo.complete = true;
            }
            return todo;
        });
        this.setState({ todos: mappedList });
        this.updateCache(this.props.listName, mappedList);
    }

    addToDo(newToDo) {
        count++;
        let parsedDate = newToDo.date.toString().substring(4,15);
        let currentList = this.state.todos;
        currentList.push({ sortDate: newToDo.date, displayDate: parsedDate, 
            name: newToDo.name, id: count, complete: false });

        this.setState( {todos: currentList });
        this.updateCache(this.props.listName, currentList);
    }

    sortToDos(todos) {
        const sortedList = [].concat(todos).sort((a,b) => {
            return a.sortDate > b.sortDate;
        });
        return sortedList;
    }

    renderToDos(sorted) {
        console.log("Re-rendering...");
        return sorted.map(todo => (
            <ToDo key={todo.id.toString()} date={todo.displayDate} name={todo.name} id={todo.id} 
                    removeToDo={this.removeToDo} completeToDo={this.completeToDo} complete={todo.complete}/>
        ));
    }

    render() {
        const sorted = this.sortToDos(this.state.todos);
        return (
            <div className="ToDoList" id={this.props.listName}>
                <div className="listName">{this.props.listName}</div>
                <ul>{this.renderToDos(sorted)}</ul>
                <AddToDo className={this.props.listName} addToDo={this.addToDo}/>
            </div>
        );
    }
}

export default ToDoList;