import { ReactNode } from "react";

import { Navigation } from "../../components/Navigation";

export const metadata = {
  title: "Dashboard",
  description: "App Dashboard",
};

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="transition-all min-h-screen flex flex-col md:p-6 lg:flex-row">
      <Navigation />

      {children}
    </div>
  );
}
