import React from 'react'

function EditTodo({handleEditForm,submitEdit,id}) {
    return (
        <form>
            <input autoFocus onChange={handleEditForm} type="text"/>
            <button value={id} onClick={submitEdit}>Edit</button>
      </form>
    )
}

export default EditTodo
