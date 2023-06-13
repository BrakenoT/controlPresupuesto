import { useState } from "react";
import Error from "./Error";
import shortid from "shortid";


const Formulario = ({ guardarGasto, guardarNuevoGasto }) =>{
    const [nombre , guardarNombre] = useState("")
    const [cantidad, guardarCantidad]  = useState('')
    const [error , guardarError] = useState(false)

    //cunado el usuario agrega el gasto
    const agregarGasto = e =>{
        e.preventDefault();
        //validar
        if(cantidad <1 || isNaN(cantidad) || nombre.trim() ===""){
            guardarError(true)
            return
        }


        guardarError(false)
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        guardarGasto(gasto)

        guardarNuevoGasto(true)

        //pasar el gasto al componente principal

        //resetear el form
        guardarNombre('')
        guardarCantidad('')
    }
    return(
        <form 
        onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>

            { error ?<Error mensaje={"Ambos campos son Obligatorios"}/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                type="text" 
                className="u-full-width"
                placeholder="Ej: Facturas"
                value={nombre}
                onChange={e => guardarNombre(e.target.value)} //q guarde el nombre
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                type="number" 
                className="u-full-width"
                placeholder="Ej: 500"
                value={cantidad}
                onChange={e => guardarCantidad(parseFloat(e.target.value, 10))}//almacena la cantidad de tipo numero
                />
            </div>

            <input 
            type="submit"
            className="button-primary u-full-width"
            value = "Agregar Gasto"
            />
        </form>
    )
} 

export default Formulario;