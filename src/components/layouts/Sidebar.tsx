import Logo from "./Logo";
// import Search from './Search';
import useFileManagerSidebar from "../../hooks/useFileManagerSidebar";
import { cn } from "../../utils/shadcn-helper";
import MinimizedLogo from "./MinimizedLogo";
import SideNav from "./SideNav";

function Sidebar() {
  const fileManagerSidebar = useFileManagerSidebar();
  return (
    <>
      <div
        className={cn(
          "shrink-0 sticky top-0 h-screen z-auto bg-brand-25 dark:bg-zinc-800 flex flex-col justify-between border-r-[1px] border-brand-100 dark:border-zinc-800 overflow-hidden overflow-y-auto",
          fileManagerSidebar.isCollapsed ? "w-[4rem] cursor-pointer" : "w-[12rem]"
        )}
      >
        <div className="flex flex-col gap-4">
          {/* LOGO */}

          <Logo isCollapsed={fileManagerSidebar.isCollapsed} />

          {/* MENUS */}
          <SideNav isCollapsed={fileManagerSidebar.isCollapsed} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
