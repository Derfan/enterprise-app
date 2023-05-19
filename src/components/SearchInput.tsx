import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import cns from "classnames";

export const SearchInput = ({
  placeholder = "",
  className = "",
  onChange,
}: {
  placeholder?: string;
  className?: string;
  onChange: (v: string) => void;
}) => {
  const [value, setValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(value);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, onChange]);

  return (
    <label
      className={cns(
        "cursor-pointer group flex items-center gap-x-4",
        className
      )}
    >
      <Image
        src="/search.svg"
        className="w6 h-6"
        width="24"
        height="24"
        alt="search"
      />
      <input
        type="search"
        name="search"
        className="cursor-pointer transition outline-0 text-md font-light placeholder-pure-white/50 caret-red bg-transparent w-full py-[10px] border-b border-b-transparent focus-visible:border-b-pure-white group-hover:border-b-greyish-blue"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};
