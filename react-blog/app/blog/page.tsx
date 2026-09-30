import {Post} from "@/app/types/post";
import Link from "next/link";
import PageTile from "../components/pageTile";

export default async function Blog() {
    // fetch blog data from external api
    const data: Response = await fetch('https://api.vercel.app/blog');

    // convert api data to an array of Post objects
    const posts: Post[] = await data.json();

    return (
        <main>
            <PageTile title="Blog" />
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="card">
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                        <p>{post.author}</p>
                        <p>{post.date}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}