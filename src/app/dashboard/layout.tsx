import { ReactNode } from "react";

import { Navigation } from "../../components/Navigation";

export const metadata = {
  title: "Dashboard",
  description: "App Dashboard",
};

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="transition-all min-h-screen flex flex-col md:p-6 lg:flex-row lg:px-0">
      <Navigation />

      <div className="transition-all px-4 pb-4 md:px-0 lg:pl-[164px] lg:pr-9 lg:w-full">
        {children}
      </div>
    </div>
  );
}
