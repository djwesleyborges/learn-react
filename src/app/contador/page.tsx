import Contador from "@/components/Contador";
import Pagina from "@/components/template/Pagina";

export default function PaginaContador() {
    return (
        <Pagina>
            <div>
                <Contador valorInicial={10} />
                <Contador />
                <Contador />
            </div>
        </Pagina>
    )
}