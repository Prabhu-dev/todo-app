import React from "react";
import "./todoitems.css"

const TodoItems = ({text, isComplete, toggleTodo, id, deleteTodo}) => {
    return (
        <>
        <div className="items-container">
            <p className={`${isComplete ? "line-through" : ""} `} onClick={() => toggleTodo(id)} >{text}</p>
            <div className="delete-icon" onClick={() => deleteTodo(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </div>
        </>
    )
}

export default TodoItems;