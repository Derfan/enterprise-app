import Image from "next/image";
import Link from "next/link";

import { NavItems } from "./NavItems";

export const Navigation = () => (
  <nav className="transition-all flex items-center justify-between bg-semi-dark-blue px-4 py-[18px] md:rounded-[10px] md:px-6 lg:flex-col lg:justify-start lg:pt-9 lg:px-7 lg:pb-8">
    <Link href="/dashboard/home">
      <Image src="/logo.svg" width="33" height="27" alt="App Logo" priority />
    </Link>

    <NavItems />

    <Image
      src="/image-avatar.png"
      className="transition-all border border-pure-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 lg:mt-auto"
      width="24"
      height="24"
      alt="Avatar"
    />
  </nav>
);
