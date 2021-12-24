import { useState } from "react"
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({agregarTodo}) => {

    const handleSubmit = e => {
        e.preventDefault()
        
        if(!nombre.trim()){
            e.target[0].focus();
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error',
            
              })
              
            return
        }
        if(!descripcion.trim()){
            e.target[1].focus();
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripción en blanco',
                icon: 'error',
            
              })
              
            return
        }
        Swal.fire({
            title: 'Éxito!',
            text: 'Los datos han sido creados al Todo!',
            icon: 'success',
        
          });
          agregarTodo({
              nombre,
              descripcion,
              estado: estado === "pendiente" ? false : true,
              prioridad,
              id: uuidv4(),
          })
          setTodo(initialState)
    }


    const initialState = {
        nombre:"",
        descripcion:"",
        estado:"pendiente",
        prioridad: false,
    }

    const [todo,setTodo]= useState(initialState)

    const {nombre,descripcion,estado,prioridad} = todo

    const handleChange = e =>{
    const {name,value,checked,type} = e.target
        setTodo(()=> ({
            ...todo,
            [name]: type==="checkbox" ? checked : value
        }))
    }

    return (
        <>
           <h3 className="mt-2">Agregar TODO</h3>
           <form onSubmit={handleSubmit}>
               <input type="text"
                        className="form-control mb-2"
                        name="nombre"
                        placeholder="Ingrese el nombre del Todo"
                        value={nombre}
                        onChange={handleChange}
                />
                <textarea name="descripcion"
                            className="form-control mb-2"
                            placeholder="ingrese descripcion"
                            value={descripcion}
                            onChange={handleChange}
                />
                <select name="estado" className="form-control mb-2" value={estado} onChange={handleChange}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <div className="from-check mb-2">
                    <input type="checkbox"
                             className="form-check-input" 
                             id="flexCheckDefault"
                             name="prioridad"
                             checked={prioridad}
                             onChange={handleChange}/>
                    <label htmlFor="flexCheckDefault" 
                    className="form-check-label">Dar prioridad</label>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
           </form>
        </>
    )
}

export default Formulario
