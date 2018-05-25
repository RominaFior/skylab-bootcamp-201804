import React, { Component } from 'react';

import Form from './form/form';
import ListToDo from './list-toDo/listToDo';
import ListDone from './list-Done/listDone';

class App extends Component {
    state = {
        arrayTask: [],
        currenTask: ''
    };

    handleChange = e => {
        let task = e.target.value;

        this.setState({
            currenTask: task
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const newTask = {
            text: this.state.currenTask,
            id: Date.now(),
            done: false,
            deleted: false
        };

        this.setState(prevState => {
            return {
                currenTask: '',
                arrayTask: [...prevState.arrayTask, newTask]
            };
        });
    };

    markTaskDone = idTask => {
        let findTask = this.state.arrayTask.find(function(task) {
            return task.id === idTask;
        });

        findTask.done = true;

        this.setState(prevState => {
            return {
                arrayTask: [...prevState.arrayTask]
            };
        });
    }; // es ejecutada por uno de sus hijos (itemToDo/ linea de codigo 11)

    deleteTask = idTask => {
        let findTask = this.state.arrayTask.find(function(task) {
            return task.id === idTask;
        });

        findTask.deleted = true;

        this.setState(prevState => {
            return {
                arrayTask: [...prevState.arrayTask]
            };
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Task-App</h1>
                </header>
                <Form
                    submit={this.handleSubmit}
                    valueCurrenTask={this.state.currenTask} //valor actualizado del currentTask para q se refleje en campo input de pantalla
                    changeTask={this.handleChange} //actualiza el estado del currentTask
                />

                <ListToDo
                    tasks={this.state.arrayTask}
                    onMarkDone2={this.markTaskDone}
                />
                <ListDone
                    tasks={this.state.arrayTask}
                    onDeleteTask2={this.deleteTask}
                />
            </div>
        );
    }
}

export default App;

/*funcionamiento interno de la funcion markTaskDone()

1) la idea de funcion markTaskDone se inicia al requerir desde el itemToDo enviar una acción a itemDone
*/
