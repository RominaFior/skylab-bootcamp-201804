import React from 'react';

import ItemToDo from '../item-toDo/itemToDo';

function ListToDo(props) {
    const tasks = props.tasks;

    return (
        <div>
            <h3>List to Do</h3>
            <ul>
                {tasks.map(currenTask => {
                    if (!currenTask.done && !currenTask.deleted) {
                        return (
                            <ItemToDo
                                task={currenTask}
                                key={currenTask.id}
                                onMarkDone1={props.onMarkDone2}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
}
export default ListToDo;
