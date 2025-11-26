"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="h-screen w-screen mx-auto">{children}</main>
    </>
  );
}
