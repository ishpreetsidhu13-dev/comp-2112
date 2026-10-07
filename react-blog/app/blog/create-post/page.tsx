'use client';

import PageTitle from "@/app/components/pageTitle";
import { useForm } from "react-hook-form";
import { Post } from "@/app/types/post";
import { useRouter } from "next/navigation";

interface PostFormData {
    title: string;
    content: string;
}

export default function CreatePost() {
    // used for redirecting after save
    const router = useRouter();

    // set up react-hook-form
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }} = useForm<PostFormData>();

    const onSubmit = async (data: PostFormData) => {
        console.log(`Submitted: `, data);

        try {
            // try making new blog post at external api
            const payload = {
                title: data.title,
                content: data.content,
                author: 'rfreeman'
            };

            // call api using POST
            const response: Response = await fetch('https://api-demo-f26.vercel.app/api/v1/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            // hopefully we get a success response
            const apiResponse: Post = await response.json();
            console.log(apiResponse);
            router.push("/blog");
        }
        catch (error: unknown) {
            console.log(error);
        }
    }

    return (
        <main>
            <h1>Create New Blog Post</h1>
            <PageTitle title="Create New Blog Post" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="title">Title: *</label>
                    <input {...register("title", { required: "Title is required"})} />
                    {errors.title && <span className="error">{errors.title.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="content">Content: *</label>
                    <textarea {...register("content", { required: "Content is required"})}></textarea>
                    {errors.content && <span className="error">{errors.content.message}</span>}
                </fieldset>
                <button>Save</button>
                {isSubmitSuccessful && <p className="success">Post Created</p>}
            </form>
        </main>
    )
}