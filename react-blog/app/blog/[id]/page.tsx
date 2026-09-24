import { Post } from "@/app/types/post";

export default async function BlogDetail({params}: {params: {id: string}}) {
    //use id from url params to fetch blog data from external api
    const {id} =await params;
    //fetch the blog post data from the external api using the id
    const res: Response = await fetch(`https://api.vercel.app/blog/${id}`);
    // convert post to a post type 
    const post: Post = await res.json();
    
    return (
        <main>
            <h1>{post.title}</h1>
            <h2>{post.author}</h2>
            <p>{post.date}</p>
            <article>{post.content}</article>
        </main>
    );
}