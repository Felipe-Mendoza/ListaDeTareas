import { useState } from "react";

export default function Todo({ item, onUpdate }) {

    const [IsEditar, setIsEditar] = useState(false)
    function FormEdit() {
        const [newValue, setNewValue] = useState(item.titulo)
        function handledSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value)
            setIsEditar(false)

        }


        function handleClick(e) {
            onUpdate(item.id, newValue);
            setIsEditar(false)


        }
        return (
            <form className="Todo" onSubmit={handledSubmit}>
                <input 
                type="text" 
                className="todoInput" 
                onChange={handleChange} 
                value={newValue} />
                <button className="button" onClick={handleClick}>Update</button>
            </form>
        )

    }
    function MuestraElemento() {
        return (
            <div className="TodoInfo">
                {item.titulo}
                <button onClick={() => setIsEditar(true)}>Editar</button>
                <button>Eliminar</button>

            </div>
        )
    }
    return <div className="todo">{IsEditar ? <FormEdit /> : <MuestraElemento />}
    </div>;
}