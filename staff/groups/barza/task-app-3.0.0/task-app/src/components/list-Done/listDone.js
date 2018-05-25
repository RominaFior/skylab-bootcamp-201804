import React from 'react';

import ItemDone from '../item-Done/itemDone';

function ListDone(props) {
    const tasks = props.tasks;

    return (
        <div>
            <h3>List Done</h3>
            <ul>
                {tasks.map(currenTask => {
                    if (currenTask.done && !currenTask.deleted) {
                        return (
                            <ItemDone
                                task={currenTask}
                                key={currenTask.id}
                                onDeleteTask1={props.onDeleteTask2}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
}
export default ListDone;
