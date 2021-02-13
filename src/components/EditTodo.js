import React from 'react'

function EditTodo({handleEditForm,submitEdit,id}) {
    return (
        <form className="editForm">
            <input autoFocus onChange={handleEditForm} type="text"/>
            <button className="addBtn" value={id} onClick={submitEdit}>Save</button>
      </form>
    )
}

export default EditTodo
