import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo.js"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"


const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const[titulo,actualizarTitulo] =useState("")
    const[color,actualizarColor]= useState("")

    //destructuracion
    const {registrarColaborador,crearEquipo} = props // registrar colaborador lo obtiene de props

    const manejarEnvio = (e) =>{ // se suele utilizar "e" para referirnos a eventos, igual podemos utilizar el nombre que queramos
        e.preventDefault();
        console.log("manejar envio")
        let datosEnviar={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo,
        }
        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }
    //crear colaborador
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
                />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
                />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
                />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear colaborador  {/*propiedad children: por que esta dentro de las etiquetas del componente */}
            </Boton>
        {/*Crear equipo*/}
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para el equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required={true}
                valor={titulo}
                actualizarValor={actualizarTitulo}
                />
            <Campo 
                titulo="color" 
                placeholder="Ingresar el color en hexadecimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                />

            <Boton>
                Crear equipo  {/*propiedad children: por que esta dentro de las etiquetas del componente */}
            </Boton>

           </form>


    </section>
}

export default Formulario