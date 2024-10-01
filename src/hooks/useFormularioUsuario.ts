import { useState } from "react"

export default function useFormularioUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function salvar(){
        console.log(`Nome: ${nome}`)
        console.log(`Email: ${email}`)
        console.log(`Password: ${password}`)
    }

    return {
        nome,
        email,
        password,
        setNome,
        setEmail,
        setPassword,
        salvar
    }
}