'use client';

import PageTitle from "@/app/components/pageTitle";
import { useForm } from "react-hook-form";

interface RegisterFormData {
    username: string;
    password: string;
    confirm: string;
}

export default function Register() {
    // set up react-hook-form
    const { register, handleSubmit, watch, formState: { errors, isSubmitSuccessful }} = useForm<RegisterFormData>();

    const onSubmit = (data: RegisterFormData) => {
        console.log("Success", data);
    }

    return (
        <main>
            <h1>Register</h1>
            <PageTitle title="Register" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username: *</label>
                    <input {...register("username", { required: "Username is required"})} />
                    {errors.username && <span className="error">{errors.username.message}</span>}
                </fieldset>

                <fieldset>
                    <label htmlFor="password">Password: *</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required"})}
                    />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </fieldset>

                <fieldset>
                    <label htmlFor="confirm">Confirm Password: *</label>
                    <input
                        type="password"
                        {...register("confirm", {
                            required: "Confirm password is required",
                            validate: value => value === watch("password") || "Passwords do not match"
                        })}
                    />
                    {errors.confirm && <span className="error">{errors.confirm.message}</span>}
                </fieldset>

                <button>Register</button>

                {isSubmitSuccessful && <p className="success">Registration Successful</p>}
            </form>
        </main>
    )
}