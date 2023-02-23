import { useState } from "react"

export default function ListaTareas() {
    const [titulo, setTitulo] = useState('Hola');
    const [todosTitulo, setTodosTitulo] = useState([])

     function handleClick(e) {
         e.preventDefault();
         setTitulo("Marco");
     }
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

                <div key={item.id}>{item.titulo}</div>
            ))}

        </div>

    </div>
    );
}