export default function Rodape() {
    return (
        <footer className="flex justify-end px-6 py-3 bg-zinc-700">
            <span className="text-zinc-400 text-sm">Todos os direitos reservador &copy; {new Date().getFullYear()}</span>
        </footer>
    )
}