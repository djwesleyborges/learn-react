import { Suspense } from "react";
import { PostsProps } from "../page";
import { PostInfo } from "./_components/post";

export default async function DetailPost({params,}: {params: Promise<{ id: string }>}) {

    const { id } = await params; // params.id e o id que vem da URL

    const data: PostsProps = await fetch(`https://dummyjson.com/posts/${id}`).then(response => response.json())
    
    
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Recebendo parametro na URL</h1>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <PostInfo id={id} />
            </Suspense>
        </div>
    );
}