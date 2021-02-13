import {useState} from 'react'
import Todo from './Todo'

function TodoList() {
    const [todoList ,setTodoList] = useState([])
    const [todos,setTodos] = useState("")
    const [edit,setEdit] = useState({id:null})


    function handleInput(e) {  
            if(e.target.value !==" ")
                setTodos(e.target.value)
        }
    function handleSubmit(e) {
            e.preventDefault()
            if(todos){
                const newTodo = {id:todoList.length + 1 , text:todos, completed:false}
                setTodoList([...todoList,newTodo])
                setTodos("")
            }
    }
    function handleEdit(e) {
        e.preventDefault()
        const newEdit = todoList.filter( (todo) => e.target.value == todo.id ).pop()
        setEdit(newEdit)

        console.log(newEdit)
        
    }
    function handleDelete(e){
        e.preventDefault()
        const newTodoList = todoList.filter( (todo => todo.id != e.target.value ))
        setTodoList(newTodoList)
    }
    function handleEditForm(e){
        let newEdit = edit
        newEdit["text"]=e.target.value
        setEdit(newEdit)
    }

    function submitEdit(e){
        e.preventDefault()
        
       const newEdit = todoList.map( (todo) =>{
            if(todo.id == edit.id)
                todo.text = edit.text 
            return todo 
        } )
        console.log(newEdit)
        setEdit({})
        
      
    }

    return (
        <div>
        <form>
            <p>Add Your Task :</p>
            <input type="text" onChange={handleInput} value={todos}/>
            <button onClick={handleSubmit}>Add</button>
        </form>
            {todoList.map((todo) => {
            if(edit.id == todo.id){
               
               return <form key={todo.id}>
                        <input autoFocus onChange={handleEditForm}  type="text"/>
                        <button value={todo.id} onClick={submitEdit}>Edit</button>
                      </form>
            } else {
                return <Todo key={todo.id} todo={todo} handleEdit={handleEdit} handleDelete={handleDelete}/> 
            }
            })}
        </div>
    )
}

export default TodoList
