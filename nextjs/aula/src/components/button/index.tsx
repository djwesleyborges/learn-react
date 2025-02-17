'use client'

import { useState } from "react"

export function Button() {

    const [nome, setNome] = useState('')

    function handleChangeName(){
        setNome('Wesley Borges')
    }

    return (
        <div>
            <button style={{backgroundColor: 'red'}} onClick={handleChangeName}>Alterar nome</button>
            <h3>Nome: {nome}</h3>
        </div>
    )
}