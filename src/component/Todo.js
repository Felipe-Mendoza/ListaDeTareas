import { useState } from "react";

export default function Todo({ item }) {

    const [IsEditar, setIsEditar] = useState(false)
    function FormEdit() {
        return (
            <form>
                <input type="text" />
                <button>Update</button>
            </form>
        )

    }
    function MuestraElemento() {
        return (
            <div className="TodoInfo">
                {item.titulo}
                <button onClick={()=>setIsEditar(true)}>Editar</button>
                <button>Eliminar</button>

            </div>
        )
    }
    return <div className="todo">{IsEditar ? <FormEdit/> : <MuestraElemento/>}
    </div>;
}