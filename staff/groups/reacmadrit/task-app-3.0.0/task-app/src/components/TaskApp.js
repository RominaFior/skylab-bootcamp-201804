import React, { Component } from 'react'
import UpdateLists from './UpdateLists'

class TaskApp extends Component {
    constructor() {
        super()
        this.state = {
            inputText: '',
            listTasks: []
        }
        this.addTask = this.addTask.bind(this)
        this._handlerAddingTask = this._handlerAddingTask.bind(this)
        this.markDone=this.markDone.bind(this)
        this.delete=this.delete.bind(this)
    }

    addTask(e) {
        e.preventDefault()
        if (this.state.inputText.length>0) {
            let taskToAdd = { 
                desc: this.state.inputText, 
                done: false, 
                id: Date.now() }
            this.setState(prevState => {
                return {
                    inputText: '',
                    listTasks: [...prevState.listTasks, taskToAdd]
                }
            })
        }
    }

    delete(iden) {
        let newTodos=this.state.listTasks.slice()
        for (var i =0; i < newTodos.length; i++) {
            if (newTodos[i].id === iden) {
            newTodos.splice(i,1);
            break;
        }}
        this.setState({
            listTasks: newTodos
        })

    }  

    _handlerAddingTask(e) {
        let inputText = e.target.value
        this.setState({
            inputText
        })
    }
    markDone(iden) {
        
        let newTasks=this.state.listTasks.map(function(v) {
            if (v.id===iden) {
                v.done=true
            }
            return v
        })

        this.setState({
            listTasks: newTasks
        })
    }
    render() {
        return <div>
            <h1> Task App </h1>
            <h2> Add Task </h2>

            <form onSubmit={this.addTask}>

                <input type="text" onChange={this._handlerAddingTask} value={this.state.inputText} />

                <input type="submit" />

            </form>

        <UpdateLists onListTasks={this.state.listTasks} onMarkDone={this.markDone} onDelete={this.delete}/>
        </div>
    }
}


export default TaskApp