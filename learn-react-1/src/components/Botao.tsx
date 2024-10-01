// Primeiro Componente
export default function Botao(props: any){
    return <button className="bg-green-500 p-2 rounded-md">
        {/* Se nao vinher o label, usa o OK como Default */}
        {props?.label ?? 'OK'} 
        </button>
}
