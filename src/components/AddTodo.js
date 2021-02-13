import React from 'react'

function AddTodo({handleInput,handleSubmit,todos}) {
    return (
        <form>
        <p>Add Your Task :</p>
        <input autoFocus type="text" onChange={handleInput} value={todos}/>
        <button onClick={handleSubmit}>Add</button>
    </form>
    )
}

export default AddTodo
