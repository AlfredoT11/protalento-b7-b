import { useState } from "react";
import Tarea from "./Tarea";

const ListaTareas = ({titulo}) => {

    // useState es un Hook que sirve para crear un estado y la función 
    //  para modificar ese estado
    const [contador, setContador] = useState(0); 
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        setContador(contador + 1);
        setTareas([...tareas, nuevaTarea]);
    }

    const eliminarTarea = (indexTareaABorrar) => {
        setTareas(tareas.filter((tareaTexto, index) => index !== indexTareaABorrar));
    }

    return (
        <>
            <h1>{titulo}</h1>
            <label>Tarea nueva: </label>
            <input
                value={nuevaTarea} 
                onChange={(event) => {setNuevaTarea(event.target.value)}}>
            </input>
            <button onClick={agregarTarea}>Agregar tarea</button>

            <p>Contador: {contador}</p>
            <ul>
                {
                    tareas.map((tareaTexto, index) => {
                        return (
                            <Tarea 
                                key={index}
                                titulo={tareaTexto} 
                                eliminarTarea={() => eliminarTarea(index)}
                            />
                        )
                    })
                }
            </ul>
        </>
    )

}

export default ListaTareas;