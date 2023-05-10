import { useState } from "react"
import "./Campo.css"

const Campo = (props)=>{ //props es una propiedad nativa que siempre nos devolvera un objeto

    const recibirValor = (e) =>{ // e de evento pero es solo un parametro puedes escribir lo que sea 
        props.actualizarValor(e.target.value)
    }
    console.log("datos", props)
    const placeholderModificado = `${props.placeholder}...`

    const {type = "text"} = props
    console.log(props.type)
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={recibirValor}
            type = {type}
            />
    </div>
}

export default Campo