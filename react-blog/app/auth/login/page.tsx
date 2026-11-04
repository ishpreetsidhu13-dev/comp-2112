'use client';

import PageTitle from "@/app/components/pageTitle";
import { useForm, Controller } from "react-hook-form";

interface LoginFormData {
    username: string;
    password: string;
}

export default function Login() {

    // set up react-hook-form
    const { register, control, handleSubmit, setError, formState: { errors, isSubmitSuccessful }} = useForm<LoginFormData>({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit = async (data: LoginFormData) => {
        console.log(`Submitted: `, data);
    }

    return (
        <main>
            <PageTitle title="Login" />
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input {...register("username", { required: "Username is required" })} type="email" />
                    {errors.username && <span className="error">{errors.username.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input type="password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </fieldset>
                <button>Login</button>
            </form>
        </main>
    );
}