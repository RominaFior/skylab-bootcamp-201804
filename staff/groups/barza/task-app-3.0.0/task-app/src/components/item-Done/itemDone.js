import React from 'react';

function ItemDone(props) {
    function handleClick() {
        props.onDeleteTask1(props.task.id); // es como ejecutar la funcion marktaskdone(id) q está en app
        // markTaskDone(idTask);
    }

    return (
        <li>
            {props.task.text} <button onClick={handleClick}>X</button>
        </li> // aquí ejecutamos la funcion markTaskDone() que está en la APP, para llegar a ella va escalando en la linea de sucesion de hijo a padre
    );
}

export default ItemDone;
