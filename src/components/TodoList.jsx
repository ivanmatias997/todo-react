import { useEffect, useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {


    const [todos,setTodos] = useState([])




    useEffect(() => {
        if(localStorage.getItem("todos")){
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);
    useEffect(()=> {
        localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos]);




    const agregarTodo = todo => {
            setTodos( () => [...todos, todo])
    }

    const eliminarTodo = (id) => {
        setTodos(() => todos.filter(item => item.id !== id))
    }
    const editarTodo = (id) => {
        const editarTodos = todos.map(item => (
            item.id === id && {...item, estado: !item.estado}
        ))
        setTodos(editarTodos)
    }

    return (
        <>
            <Formulario agregarTodo={agregarTodo} />
            <ul className="list-group list-group-numbered mt-2">
            {
                todos.map(item => (
                    <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
                ))
            }
            </ul>
        </>
    )
}

export default TodoList
