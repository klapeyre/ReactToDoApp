import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AddToDo.css';

var moment = require('moment');

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newToDoName: '',
            startDate: moment()
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addToDo = this.addToDo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleUpdate(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleChange(date) {
        this.setState({ startDate: date });
    }

    addToDo() {
        const todo = this.state.newToDoName;
        todo.trim();
        if (todo !== '') {
            this.props.addToDo( {date: this.state.startDate.toDate(), name: this.state.newToDoName });
            this.setState({ newToDoName: '', startDate: moment()});
        } else {
            alert("Need a name for new To Do!");
            this.setState({ newToDoName: '', startDate: moment()});
        }
    }

    render() {
        return (
            <div className="AddToDo">
                <div className="datepicker">
                    <label>Date: </label>
                    &nbsp; &nbsp;
                    <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                    &nbsp; &nbsp;
                    <label>ToDo: </label>
                    &nbsp; &nbsp;
                    <input type="text" name="newToDoName" onChange={this.handleUpdate} value={this.state.newToDoName}/>
                    &nbsp; &nbsp;
                    <Button onClick={this.addToDo} bsStyle="primary" bsSize="small">Add</Button>
                </div>
                
            </div>
        )
    }
}

export default AddToDo;