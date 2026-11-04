'use client';

import PageTitle from "@/app/components/pageTitle";
import { useForm, Controller } from "react-hook-form";

interface RegisterFormData {
    username: string;
    password: string;
    confirm: string;
}

export default function Register() {

    // set up react-hook-form
    const { register, control, handleSubmit, setError, formState: { errors, isSubmitSuccessful }} = useForm<RegisterFormData>({
        defaultValues: {
            username: '',
            password: '',
            confirm: ''
        }
    });

    const validatePassword = (value: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        return passwordRegex.test(value) || "Must be 8+ chars with 1 uppercase, 1 lowercase, 1 number, and 1 special character";
    };

    const onSubmit = async (data: RegisterFormData) => {
        console.log(`Submitted: `, data);

        try {
            // set up json payload
            const payload = {
                username: data.username,
                password: data.password
            }

            const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN ?? "https://comp2112-react-blog-f26.onrender.com";

            const response: Response = await fetch(`${apiDomain}/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const apiResponse: any = await response.json();
            console.log(apiResponse);

            if (apiResponse.success === false) {
                setError("username", {
                    type: "api",
                    message: apiResponse.msg || "Registration Failed"
                });
            }
            else {
                alert("Registration Successful!  Use the Login link above.");
            }
        }
        catch (error: unknown) {
            console.error(error);
            alert("The registration service is unavailable right now, but the form is working in demo mode.");
        }
    }

    return (
        <main>
            <PageTitle title="Register" />
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input {...register("username", { required: "Username is required" })} type="email" />
                    {errors.username && <span className="error">{errors.username.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input type="password" {...register("password", { required: "Password is required",
                        validate: validatePassword })} />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input
                        type="password"
                        {...register("confirm", {
                            required: "Password Confirmation is required",
                            validate: (value, formValues) => {
                                return value === formValues.password || "Passwords do not match"
                            }
                        })}
                    />
                    {errors.confirm && <span className="error">{errors.confirm.message}</span>}
                </fieldset>
                <button>Register</button>
            </form>
        </main>
    );
}