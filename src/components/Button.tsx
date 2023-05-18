import { ButtonHTMLAttributes, ReactNode } from "react";
import cns from "classnames";

export const Button = ({
  children,
  type = "button",
  className = "",
}: {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
}) => (
  <button
    type={type}
    className={cns(
      "cursor-pointer transition outline-0",
      "transparent p-3.5 rounded-md bg-red hover:bg-pure-white hover:text-semi-dark-blue",
      "bg-red hover:bg-pure-white hover:text-semi-dark-blue",
      "focus-visible:bg-pure-white focus-visible:text-semi-dark-blue",
      className
    )}
  >
    {children}
  </button>
);
