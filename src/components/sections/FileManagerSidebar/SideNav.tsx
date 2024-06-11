import sidebar from "@/assets/data/fileManagerSidebar";
import { cn } from "../../../utils/shadcn-helper";
import { SidebarMenuGroup } from "./SidebarMenuGroup";

const SideNav = ({ isCollapsed }) => {
  return (
    <>
      <div className={cn(isCollapsed ? "flex flex-col items-center h-full" : "px-2")}>
        {sidebar.map((item, idx) => {
          return <SidebarMenuGroup item={item} isCollapsed={isCollapsed} key={idx} />;
        })}
      </div>
    </>
  );
};

export default SideNav;
