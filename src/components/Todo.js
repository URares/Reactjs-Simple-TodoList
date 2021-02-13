import React from 'react'

function Todo({todo,handleEdit,handleDelete}) {
        return (
            <form>
                <p>{todo.text}</p>
                <button value={todo.id} onClick={handleEdit} >Edit</button>
                <button value={todo.id} onClick={handleDelete}>Delete</button>
            </form>
        )
}

export default Todo
