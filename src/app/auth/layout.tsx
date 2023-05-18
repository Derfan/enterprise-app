import { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "Authorization",
  description: "App Authorization",
};

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <div className="transition-all min-h-screen pt-12 px-6 pb-6 flex flex-col items-center gap-y-[58.4px] md:pt-20 md:gap-y-18 lg:md:gap-y-20">
      <Image src="/logo.svg" width="33" height="27" alt="App Logo" priority />

      {children}
    </div>
  );
}
