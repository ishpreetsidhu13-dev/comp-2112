import {Post} from "@/app/types/post";
import Link from "next/link";
import PageTitle from "@/app/components/pageTitle";

export default async function Blog() {
    // fetch blog data from external api
    const data: Response = await fetch('https://api-demo-f26.vercel.app/api/v1/posts');

    // convert api data to an array of Post objects
    const posts: Post[] = await data.json();

    return (
        <main>
            <PageTitle title="Blog" />
            <h1>Blog</h1>
            <Link href="/blog/create-post" className="newLink">Create New Blog Post</Link>
            <ul>
                {posts.map((post) => (
                    <li key={post._id} className="card">
                        <Link href={`/blog/${post._id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}