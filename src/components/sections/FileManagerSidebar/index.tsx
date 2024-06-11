import Logo from "../../layouts/Logo";
// import Search from './Search';
import useFileManagerSidebar from "../../../hooks/zustand-hooks/useFileManagerSidebar";
import { cn } from "../../../utils/shadcn-helper";
import FooterSideNav from "./FooterSideNav";
import SideNav from "./SideNav";

const storage = {
  capcity: 100,
  filled: 9,
};

function Sidebar() {
  const fileManagerSidebar = useFileManagerSidebar();
  return (
    <>
      <div
        className={cn(
          "shrink-0 sticky top-0 h-screen z-auto bg-brand-25 dark:bg-zinc-800 flex flex-col justify-between border-r-[1px] border-brand-100 dark:border-zinc-800 overflow-hidden overflow-y-auto",
          fileManagerSidebar.isCollapsed ? "basis-[4rem] cursor-pointer" : "basis-[12rem]"
        )}
      >
        <div className="flex flex-col gap-4 h-full">
          {/* LOGO */}

          <Logo isCollapsed={fileManagerSidebar.isCollapsed} />

          {/* MENUS */}
          <SideNav isCollapsed={fileManagerSidebar.isCollapsed} />
          <FooterSideNav isCollapsed={fileManagerSidebar.isCollapsed} storage={storage} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
