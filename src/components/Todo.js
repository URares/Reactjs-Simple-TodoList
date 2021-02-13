import React from 'react'

function Todo({ todo, handleEdit, handleDelete , handleComplete}) {
    return (
        <form className="todo">
            <p onClick={() => handleComplete(todo.id)} className={ todo.completed ? "todoText completed" : "todoText"}>{todo.text}</p>
            <div className="todoButtons">
                <button className="edit" value={todo.id} onClick={handleEdit} >Edit</button>
                <button className="delete" value={todo.id} onClick={handleDelete}>Delete</button>
            </div>
        </form>
    )
}

export default Todo
