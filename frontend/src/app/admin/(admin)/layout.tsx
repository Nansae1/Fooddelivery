import { AdminSidebar } from "./_components/Admin-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      {children}
    </div>
  );
}
