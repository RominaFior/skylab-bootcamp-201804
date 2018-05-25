import React from 'react';

function Form(props) {
    return (
        <form onSubmit={props.submit}>
            <input
                type="text"
                value={props.valueCurrenTask}
                onChange={props.changeTask}
            />
            <button>Add</button>
        </form>
    );
}
export default Form;
