import React from 'react'

function AddTodo({handleInput,handleSubmit,todos}) {
    return (
        <form className="addTodo">
        <p>Add Your Task :</p>
        <input autoFocus type="text" onChange={handleInput} value={todos}/>
        <button className="addBtn" onClick={handleSubmit}>Add</button>
    </form>
    )
}

export default AddTodo
