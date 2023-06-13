import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import { useEffect } from 'react';

function App() {

  //definir el state
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true) //apra mostrar el inicio pero si ya fue llenado sera false
  const [gastos , guardarGastos] = useState([])
  const [gasto , guardarGasto] = useState({})
  const [crearGasto , guardarNuevoGasto] = useState(false)

  //useEffect que actualiza el restante

  useEffect(() =>{
    if(crearGasto){
      //agrega al nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      //aqui resta eal presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)

      //resetear

      guardarNuevoGasto(false)
    }
  },[gastos,crearGasto,restante,gasto])

  //funcion para agregar gastos
  //const agregarNuevoGasto = gasto =>{
    //guardarGastos([
      //...gastos,
      //gasto
    //])
  //}

  return (
    <div className='container'>
      <header>
        <h1>Gasto semanal</h1>
        
        <div className='contenido-principal contenido'>
          { mostrarpregunta
          ?
          (
          <Pregunta 
            guardarPresupuesto = {guardarPresupuesto}
            guardarRestante = {guardarRestante}
            actualizarPregunta = {actualizarPregunta}
          />
          )
          :
          (
            <div className='row'>
              <div className='one-half column'>
                <Formulario 
                guardarGasto ={guardarGasto}
                guardarNuevoGasto = {guardarNuevoGasto}
                />
              </div>

              <div className='one-half column'>
                <Listado
                gastos = {gastos}
                />
                <ControlPresupuesto
                presupuesto = {presupuesto}
                restante = {restante}
                />
              </div>
            </div>
          )}
          
        </div>
      </header>
    </div>
  );
}

export default App;
