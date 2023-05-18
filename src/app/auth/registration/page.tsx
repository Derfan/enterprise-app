"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

import { AuthForm, InputField, Button } from "@/components";

const defaultValues = { email: "", password: "", repeatPassword: "" };

export default function Login() {
  const form = useForm({ defaultValues });
  const { handleSubmit, watch } = form;

  const onSubmit = async ({ email, password }: typeof defaultValues) => {
    console.log({ email, password });
  };

  return (
    <AuthForm form={form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-[32px] leading-10">Sign Up</h2>

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

      <InputField
        type="password"
        name="repeatPassword"
        placeholder="Repeat Password"
        className="mt-[6px]"
        options={{
          required: "Can’t be empty",
          minLength: { value: 8, message: "Can't be less then 8" },
          maxLength: { value: 16, message: "Can't be more then 16" },
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        }}
      />

      <Button type="submit" className="mt-10">
        Create an account
      </Button>

      <p className="flex items-center justify-center gap-x-[9px] mt-6">
        <span>Alread have an account?</span>
        <Link
          href="/auth/login"
          className="transition text-red outline-0 hover:text-pure-white focus-visible:text-pure-white"
        >
          Login
        </Link>
      </p>
    </AuthForm>
  );
}
