'use client';

import PageTitle from "@/app/components/pageTitle";
import { useForm, Controller } from "react-hook-form";
import { Post } from "@/app/types/post";
import { useRouter } from "next/navigation";
import SimpleWysiwyg from "react-simple-wysiwyg";

interface PostFormData {
    title: string;
    content: string;
}

// event handler for rte to update value user has entered for blog post content
interface SimpleWysiwygChangeEvent {
    target: {
        value: string;
    }
}

export default function CreatePost() {
    // used for redirecting after save
    const router = useRouter();

    // set up react-hook-form
    const { register, control, handleSubmit, formState: { errors, isSubmitSuccessful }} = useForm<PostFormData>({
        defaultValues: {
            title: '',
            content: ''
        }
    });

    const onSubmit = async (data: PostFormData) => {
        console.log(`Submitted: `, data);

        try {
            // try making new blog post at external api
            const payload = {
                title: data.title,
                content: data.content,
                author: 'rfreeman'
            };

            const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN ?? "https://comp2112-react-blog-f26.onrender.com";

            const response: Response = await fetch(`${apiDomain}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const apiResponse: Post = await response.json();
            console.log(apiResponse);
            router.push("/blog");
        }
        catch (error: unknown) {
            console.error(error);
            alert("The blog API is unavailable right now, but the page will still work with sample data.");
            router.push("/blog");
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
                    {/*<textarea {...register("content", { required: "Content is required"})}></textarea>*/}
                    <Controller name="content" control={control} rules={{ required: "Content is required" }}
                                render={({ field }) => (
                                    <SimpleWysiwyg className="rte" value={field.value}
                                                   onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                    {errors.content && <span className="error">{errors.content.message}</span>}
                </fieldset>
                <button>Save</button>
                {isSubmitSuccessful && <p className="success">Post Created</p>}
            </form>
        </main>
    )
}