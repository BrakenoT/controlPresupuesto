import React from "react";
import { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({ guardarRestante, guardarPresupuesto ,actualizarPregunta}) => {

    //definir el state
    const [cantidad , guardarCantidad ] = useState(0)
    const [error, guardarError] = useState(false)

    //submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault(); //pa que no recarge la pagina

        //validar
        if (cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return
        }

        //si se pasa la validacion
        guardarError(false)

        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
        
    }


    //funcion definirPresupuesto que lo lee

    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value)) //el input lee string asi que lo volvemos entero
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es Incorrecto"/> :null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                type="number" //aunque sea number igualmente se lee como string
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />

                <input 
                type="submit"
                className="button-primary u-full-width"
                value = "definir presupuesto"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta;