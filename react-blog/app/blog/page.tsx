import {Post} from "@/app/types/post";
import Link from "next/link";
import PageTitle from "@/app/components/pageTitle";

const fallbackPosts: Post[] = [
    {
        _id: 1,
        title: "Welcome to the Blog",
        author: "rfreeman",
        date: "2026-11-01T00:00:00.000Z",
        content: "<p>Welcome to the blog. This sample post loads if the remote API is unavailable.</p>",
        category: "General"
    },
    {
        _id: 2,
        title: "Getting Started with Next.js",
        author: "rfreeman",
        date: "2026-11-02T00:00:00.000Z",
        content: "<p>Use this app to create and explore blog posts locally when the API is down.</p>",
        category: "Tutorial"
    }
];

export default async function Blog() {
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN ?? "https://comp2112-react-blog-f26.onrender.com";
    let posts: Post[] = fallbackPosts;

    try {
        const response = await fetch(`${apiDomain}/posts`, { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            posts = data;
        }
    } catch (error) {
        console.warn("Falling back to demo blog posts:", error);
    }

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