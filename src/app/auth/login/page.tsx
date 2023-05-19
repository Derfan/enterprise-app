"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

import { AuthForm, InputField, Button } from "@/components";

const defaultValues = { email: "", password: "" };

export default function Login() {
  const form = useForm({ defaultValues });
  const { handleSubmit } = form;

  const onSubmit = async (formData: typeof defaultValues) => {
    console.log(formData);

    window.location.href = "/dashboard/home";
  };

  return (
    <AuthForm form={form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-[32px] leading-10">Login</h2>

      <InputField
        type="email"
        name="email"
        placeholder="Email address"
        className="mt-[22px]"
        options={{ required: "Can’t be empty" }}
      />

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        className="mt-[6px]"
        options={{
          required: "Can’t be empty",
          minLength: { value: 8, message: "Can't be less then 8" },
          maxLength: { value: 16, message: "Can't be more then 16" },
        }}
      />

      <Button type="submit" className="mt-10">
        Login to your account
      </Button>

      <p className="flex items-center justify-center gap-x-[9px] mt-6">
        <span>Don’t have an account?</span>
        <Link
          href="/auth/registration"
          className="transition text-red outline-0 hover:text-pure-white focus-visible:text-pure-white"
        >
          Sign Up
        </Link>
      </p>
    </AuthForm>
  );
}
