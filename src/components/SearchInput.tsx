import Image from "next/image";
import cns from "classnames";

export const SearchInput = ({
  placeholder = "",
  className = "",
}: {
  placeholder?: string;
  className?: string;
}) => {
  return (
    <label className={cns("flex items-center gap-x-4", className)}>
      <Image
        src="/search.svg"
        className="w6 h-6"
        width="24"
        height="24"
        alt="search"
      />
      <input
        type="search"
        placeholder={placeholder}
        className="cursor-pointer transition outline-0 text-md font-light placeholder-pure-white/50 caret-red bg-transparent w-full py-[10px] border-b border-b-transparent focus-visible:border-b-pure-white"
      />
    </label>
  );
};
