import Header from "@/components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </div>
  );
};

export default DashboardLayout;
