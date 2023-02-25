import { useState } from "react"
import Todo from "./Todo";

export default function ListaTareas() {
    const [titulo, setTitulo] = useState('Hola');
    const [todosTitulo, setTodosTitulo] = useState([])

    function handleChange(e) {

        const value = e.target.value
        setTitulo(value)

    }
    function handleSubmit(e) {
        e.preventDefault();
        const newElemento = {
            id: crypto.randomUUID(),
            titulo: titulo,
            completado: false,

        };
        const temp = [...todosTitulo];
        temp.unshift(newElemento)
        setTodosTitulo(temp)


    }

    function handleUpdate(id, value) {
        const temp = [...todosTitulo]
        const item = temp.find(item => item.id === id)
        item.titulo = value
        setTodosTitulo(temp)

    }

    return (
        <div className="TodoContainer">
            <form className="Container" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="Formulario" value={titulo} />
                <input
                    onClick={handleSubmit}
                    className="boton"
                    type="submit"
                    value="Agregar"
                />

            </form>

            <div className="TodasLasTareas">
                {
                    todosTitulo.map((item) => (
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} />

                    ))}

            </div>

        </div>
    );
}