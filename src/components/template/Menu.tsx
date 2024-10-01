import Link from "next/link";
import MenuItem from "./MenuItem";
import { IconForms, IconHome2, IconNumber1, IconNumbers } from "@tabler/icons-react";

export default function Menu() {
    return (
        <aside className="w-80 bg-zinc-800 p-6">
            <nav className="flex flex-col gap-2">
                <MenuItem texto="Home" href="/"  icone={<IconHome2 />}/>
                <MenuItem texto="Primeiro Componente" href="/primeiro" icone={<IconNumber1 />}/>
                <MenuItem texto="Componente com estado" href="/contador" icone={<IconNumbers />}/>
                <MenuItem texto="Exemplo de Formulário" href="/formulario" icone={<IconForms />}/>                
            </nav>
        </aside>
    )
}