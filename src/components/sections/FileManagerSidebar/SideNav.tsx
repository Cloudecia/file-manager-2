import sidebar from "@/assets/data/fileManagerSidebar";
import { cn } from "../../../utils/shadcn-helper";
import { SidebarMenuGroup } from "./SidebarMenuGroup";

const SideNav = ({ isCollapsed }) => {
  return (
    <>
      <div className={cn(isCollapsed ? "flex flex-col items-center h-full" : "px-2")}>
        {sidebar.map((item) => {
          return <SidebarMenuGroup item={item} isCollapsed={isCollapsed} />;
        })}
      </div>
    </>
  );
};

export default SideNav;
