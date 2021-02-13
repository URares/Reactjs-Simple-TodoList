import React from 'react'

function Todo({ todo, handleEdit, handleDelete }) {
    return (
        <form className="todo">
            <p>{todo.text}</p>
            <div className="todoButtons">
                <button className="edit" value={todo.id} onClick={handleEdit} >Edit</button>
                <button className="delete" value={todo.id} onClick={handleDelete}>Delete</button>
            </div>
        </form>
    )
}

export default Todo
