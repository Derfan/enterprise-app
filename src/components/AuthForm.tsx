import { DOMAttributes, ReactNode } from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

export const AuthForm = <T extends FieldValues>({
  form,
  children,
  onSubmit,
}: {
  form: UseFormReturn<T>;
  children: ReactNode;
  onSubmit: DOMAttributes<HTMLFormElement>["onSubmit"];
}) => (
  <FormProvider {...form}>
    <form
      className="transition-all flex flex-col bg-semi-dark-blue w-full max-w-[400px] p-6 rounded-[10px] md:p-8"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  </FormProvider>
);
