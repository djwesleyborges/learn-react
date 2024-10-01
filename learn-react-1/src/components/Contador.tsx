'use client'

import { useState } from "react"

interface ContadorProps {
    valorInicial?: number
}

export default function Contador(props: ContadorProps) {
    
    const [numero, setAlteraNumeroNoHTML] = useState(props?.valorInicial ?? 0)


    function decrementar() {
        if (numero <= 0) {
            console.log('numero menor ou igual a 0')
            return
        }
        setAlteraNumeroNoHTML(numero - 1)

        console.log(numero)
    }

    function incrementar() {
        setAlteraNumeroNoHTML(numero + 1)
        console.log(numero)
    }

    

    return (
        <div>
            <h1>Contador</h1>
            <span>{numero}</span>
            <div className="flex gap-2">
                <button onClick={incrementar} className="bg-green-600 p-2">Incrementar</button>
                <button onClick={decrementar} className="bg-red-500 p-2">Decrementar</button>
            </div>
        </div>
    )
}