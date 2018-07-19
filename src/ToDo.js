import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './ToDo.css';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.removeToDo = this.removeToDo.bind(this);
        this.completeToDo = this.completeToDo.bind(this);
    }

    removeToDo() {
        this.props.removeToDo(this.props.id);
    }

    completeToDo() {
        this.props.completeToDo(this.props.id);
    }

    render() {
        let todo_style = this.props.complete ? "complete" : "regular";
        let date = this.props.date;
        console.log("Todo date: " + date);
        return (
            <li className="ToDo">
                <div className={todo_style}>
                    Date: {date}
                    <br/>
                    -- {this.props.name}
                    &nbsp; &nbsp;
                    <Button onClick={this.removeToDo} bsSize="small" bsStyle="danger" className="btn-class">Remove</Button>
                    <Button onClick={this.completeToDo} bsSize="small" bsStyle="success" className="btn-class">Complete</Button>
                </div>
            </li>
            
        );
    }
}

export default ToDo;
