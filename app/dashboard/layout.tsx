'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/dashboard_nav";
import axios from "axios";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div
      className={`w-full flex justify-start flex-col md:flex-row antialiased bg-gray-400`}
    >
      <Header />
      {children}
    </div>
  );
}