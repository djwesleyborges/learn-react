'use client'
import useFormularioUsuario from "@/hooks/useFormularioUsuario"
import { useState } from "react"

export default function Formulario() {

    const {nome, setNome, email, setEmail, password, setPassword, salvar} = useFormularioUsuario()

    return (
        <div className="flex flex-col gap-3">
            <input
                type="text"
                placeholder="Nome"
                className="bg-zinc-800 p-2 rounded-md outline-none"
                value={nome}
                onChange={e => setNome(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                size={80}
                className="bg-zinc-800 p-2 rounded-md outline-none"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                size={80}
                className="bg-zinc-800 p-2 rounded-md outline-none"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button
                onClick={salvar}
                className="bg-green-500 p-2 rounded-md"
            >
                Salvar
            </button>

            <div className="flex gap-5">
                <span>{nome}</span>
                <span>{email}</span>
                <span>{password}</span>
            </div>
        </div>
    )
}