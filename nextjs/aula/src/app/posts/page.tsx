import {Button} from "@/components/button";
import next from "next";
import Link from "next/link";

export interface PostsProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostsProps[]
}

export default async function Posts() {

    //const response = await fetch(`https://dummyjson.com/posts`)
    // Requisição usando cache de 60 segundos.
    const response = await fetch(`https://dummyjson.com/posts`, {cache: 'force-cache', next: {revalidate: 60}})
    const data: ResponseProps = await response.json()

    async function handleFetchPosts() {
        'use server'
        console.log('clicou')
    }

    async function handleSearchUser(formData: FormData) {
        'use server'
        const username = formData.get('username')
        console.log(username)
    }

    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos posts</h1>


            <span>Este componente foi criado como CLIENT<Button /></span>

            <span>Este componente foi criado como SERVER, porem usando a diretiva 'user server'
                <button onClick={handleFetchPosts} style={{backgroundColor: 'red'}}>Buscar Posts</button>
            </span>

            <form className="flex gap-2 my-4" action={handleSearchUser}>
                <input type="text" name="username" placeholder="Nome do Usuario" className="border border-gray-200 p-2 rounded"/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Buscar</button>
            </form>

            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className="text-blue-500 border border-blue-500 p-2 rounded pt-1" href={`/posts/${post.id}`}>Detalhes</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Server component > Client component