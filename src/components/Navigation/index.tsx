import cns from "classnames";
import Image from "next/image";
import Link from "next/link";

import { NavItems } from "./NavItems";

export const Navigation = ({ className = "" }: { className?: string }) => (
  <nav
    className={cns(
      "transition-all flex items-center justify-between bg-semi-dark-blue px-4 py-[18px] md:rounded-[10px] md:px-6 lg:flex-col lg:justify-start lg:pt-9 lg:px-7 lg:pb-8",
      "lg:fixed lg:left-6 lg:inset-y-6 lg:min-h-[490px]",
      className
    )}
  >
    <Link href="/dashboard/home">
      <Image src="/logo.svg" width="33" height="27" alt="App Logo" priority />
    </Link>

    <NavItems />

    <Link href="/auth/login" className="lg:mt-auto">
      <Image
        src="/image-avatar.png"
        className="transition-all border border-pure-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
        width="24"
        height="24"
        alt="Avatar"
      />
    </Link>
  </nav>
);
