import React from 'react'

function UpdateLists(props) {
let todoList = props.onListTasks.filter(v => v.done===false)
let doneList = props.onListTasks.filter(v => v.done===true)
todoList = todoList.map(v => {
            return <li key={v.id}><button onClick={(e) => {
                e.preventDefault()
                props.onMarkDone(v.id)
            }}>✅</button>{v.desc} </li>
        })
doneList = doneList.map(v => {
    return <li key={v.id}><button onClick={(e) => {
        e.preventDefault()
        props.onDelete(v.id)
        }}>❌</button> {v.desc} </li>
})

    return (
        <div>
            {todoList.length > 0 &&
                <div>
                    <h2>TO DO</h2>
                    <ul>{todoList}</ul>
                </div>
            }
            {doneList.length > 0 &&
                <div>
                    <h2>DONE</h2>
                    <ul>{doneList}</ul>
                </div>
            }
        </div>

    )
}

export default UpdateLists