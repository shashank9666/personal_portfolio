"use client";

import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";
import Sidebar from "@/components/layout/Sidebar";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <MobileNav />
      <main className="h-screen w-screen mx-auto">{children}</main>
    </>
  );
}
