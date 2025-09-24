import React from 'react';
import AdminHeader from '../Components/Header';
import Sidebar from '../Components/NavLink';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="flex">

{/* <span className="block"></span> */}
      <AdminHeader />
      <Sidebar />
      </section>
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
