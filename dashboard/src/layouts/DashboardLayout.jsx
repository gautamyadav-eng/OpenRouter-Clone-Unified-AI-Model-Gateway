import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;