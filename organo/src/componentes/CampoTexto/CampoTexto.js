import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {    

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" id={props.label} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto