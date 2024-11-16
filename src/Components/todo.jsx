import React, { useEffect, useRef, useState } from "react";
import './todo.css';
import TodoItems from "./todoitems";

const Todo = () => {
    const [todoList,setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []); 
    const inputRef = useRef();

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoList));
    },[todoList]);

    const addTask = () => {
        const inputValue = inputRef.current.value.trim();
        if ( inputValue === "") {
            return null;
        };
        const newTodo =  {
            id: Date.now(),
            text: inputValue,
            isComplete: false,
        };
        setTodoList((prev)=>[...prev, newTodo]);
        inputRef.current.value = "";
    };

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
          addTask();
        }
      };

    const toggleTodo = (id) => {
        setTodoList((prev) => {
            return prev.map((todo) => {
                if(id === todo.id) {
                    return {...todo, isComplete: !todo.isComplete};
                }
                return todo;
            })            
        });
    };

    const deleteTodo = (id) => {
        setTodoList((prev)=> {
            return prev.filter((todo) => todo.id !== id);
        })
    }

    return( 
    <>
        <div className="main-container">
            <div className="heading-container">
            <h1>To Do</h1>
            <div>
               <h1> {String.fromCodePoint('0x270C')} </h1>
             </div> 
            </div>
            

            <div className="input-container">
                <div className="input" onKeyDown={handleKeyDown}>
                    <input ref={inputRef} type="text" placeholder="Add To-Do" name="input" id="input-text" />
                </div>
                <button className="add" onClick={addTask}>Add</button>
            </div>
            <p className="list-text">List of Tasks</p>
            <div>
                {
                    todoList.length === 0 ? 
                    (<div className="no-todo">
                    <p>No Tasks Found...</p>
                    <div>
                        {String.fromCodePoint('0x1F440')}
                    </div>  
                    </div> 
                    ) 
                     : 
                    (
                    todoList.map((todo, index) => { return <TodoItems text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>; })    
                    )
                }
            </div>
        </div>
    </>
    )
}

export default Todo;