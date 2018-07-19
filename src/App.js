import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import './ToDoList.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <div className="Container">
          <ToDoList listName="Kevin"/>
          <ToDoList listName="Britt"/>      
        </div>
      </div>
    );
  }
}

export default App;
