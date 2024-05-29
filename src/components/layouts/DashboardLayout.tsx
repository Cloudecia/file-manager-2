import { Outlet } from "react-router-dom";
import DashboardHeader from "../sections/FileManagerHeader";
import CopyrightFooter from "../sections/CopyrightFooter";
import Sidebar from "../sections/FileManagerSidebar";

function UserDashboardLayout() {
  return (
    <>
      <div className="flex relative min-h-screen">
        <Sidebar />

        <div className={`flex flex-col grow relative`}>
          <DashboardHeader />

          <Outlet />

          <CopyrightFooter className="mt-auto" />
        </div>
      </div>
    </>
  );
}

export default UserDashboardLayout;
