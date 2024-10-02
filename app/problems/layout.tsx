


export default function ProblemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-gray-200"
      >
        <div className="">
        <div className="min-h-screen flex flex-row items-center  ">
          {children}
        </div>
        
        </div>
      </body>
    </html>
  );
}
