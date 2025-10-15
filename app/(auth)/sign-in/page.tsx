'use client'
import React from 'react'
import {useForm} from "react-hook-form";
import InputField from "@/components/forms/InputField";
import {Button} from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    },);

    const onSubmit= async (data: SignUpFormData) => {
        try {
            console.log(data);
        }
        catch(e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1 className="form-title">Welcome Back to Stock-Sense</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="johnwick@gmail.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email is required', pattern: /^[a-zA-Z0-9_-]+$/, message: 'Email is required' }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8  }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing In' : 'Log In'}
                </Button>

                <FooterLink text="Don't have an Account?" linkText="Sign up" href="/sign-up" />
            </form>
        </>
    )
}
export default SignIn
