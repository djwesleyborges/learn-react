'use client'

import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
import Rodape from "./Rodape"

export default function Pagina(props: any) {
    console.log(props.children)
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho />
            <div className="flex-1 flex">
            <Menu />
            <main className="p-8">{props.children}</main>
            </div>
            <Rodape />
        </div>
    )
}