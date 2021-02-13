import {useState} from 'react'
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'
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

        <AddTodo handleSubmit={handleSubmit} todos={todos} handleInput={handleInput} />

            {todoList.map((todo) => {
            if(edit.id == todo.id)
               return <EditTodo key={todo.id} handleEditForm={handleEditForm} submitEdit={submitEdit} />
             else 
                return <Todo key={todo.id} todo={todo} handleEdit={handleEdit} handleDelete={handleDelete}/> 
            
            })}
        </div>
    )
}

export default TodoList
