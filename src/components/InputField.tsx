import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import cns from "classnames";

export const InputField = ({
  type,
  name,
  options = {},
  placeholder = "",
  className = "",
}: {
  type: HTMLInputTypeAttribute;
  name: string;
  options?: RegisterOptions;
  placeholder?: string;
  className?: string;
}) => {
  const { register, formState } = useFormContext();
  const errorMessage = formState.errors[name]?.message;

  return (
    <label className="relative">
      <input
        {...register(name, options)}
        type={type}
        placeholder={placeholder}
        className={cns(
          "cursor-pointer transition outline-0",
          "w-full text-[15px] leading-[19px] text-pure-white font-light placeholder-pure-white/50",
          "pt-[18px] px-4 pb-[17px] border-b border-b-greyish-blue caret-red bg-transparent",
          "focus-visible:border-b-pure-white",
          { "border-b-red": !!errorMessage },
          className
        )}
      />

      {errorMessage && (
        <span className="absolute right-4 bottom-1/4 text-red">
          {typeof errorMessage === "string" && errorMessage}
        </span>
      )}
    </label>
  );
};
