import Header from "@/components/dashboard_nav";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`w-full flex justify-start flex-col-reverse md:flex-row   antialiased bg-gray-400`}
    >
      <Header />
      {children}
    </div>
  );
}
