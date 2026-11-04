import {Post} from "@/app/types/post";
import PageTitle from "@/app/components/pageTitle";
import { Parser } from "html-to-react";

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

export default async function BlogDetail({ params }: { params: { id: string }}) {
    const { id } = await params;
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN ?? "https://comp2112-react-blog-f26.onrender.com";
    let post: Post | null = fallbackPosts.find((item) => String(item._id) === id) ?? null;

    try {
        const url = `${apiDomain}/posts/${id}`;
        const res = await fetch(url, {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }

        const data = await res.json();
        if (data && data._id) {
            post = data;
        }
    } catch (error) {
        console.warn("Falling back to demo post data:", error);
    }

    if (!post) {
        return (
            <main>
                <h1>Post Not Found</h1>
            </main>
        );
    }

    return (
        <main>
            <PageTitle title={post.title} />
            <h1>{post.title}</h1>
            <h2>{post.author} on {new Date(post.date).toLocaleDateString()}</h2>
            <article>{Parser().parse(post.content)}</article>
        </main>
    );
}