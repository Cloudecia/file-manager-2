import Logo from "./Logo";
// import Search from './Search';
import useFileManagerSidebar from "../../hooks/useFileManagerSidebar";
import { cn } from "../../utils/shadcn-helper";
import SideNav from "./SideNav";
import { Progress } from "../reusables/ui/progress";
import { Button } from "../reusables/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../reusables/ui/avatar";
import ProgressRing from "../reusables/ProgressRing";

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
          fileManagerSidebar.isCollapsed ? "w-[4rem] cursor-pointer" : "w-[12rem]"
        )}
      >
        <div className="flex flex-col gap-4 h-full">
          {/* LOGO */}

          <Logo isCollapsed={fileManagerSidebar.isCollapsed} />

          {/* MENUS */}
          <SideNav isCollapsed={fileManagerSidebar.isCollapsed} />
          <FooterSideNav isCollapsed={fileManagerSidebar.isCollapsed} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;

export function FooterSideNav({ isCollapsed }: { isCollapsed: boolean }) {
  const danger = storage.filled / storage.capcity > 0.9;

  const progressLabel = danger && "danger";

  const collapsed = () => {
    return (
      <div className="mx-2 mb-2 mt-auto">
        <div className="relative">
          <div className="absolute top-0 left-0 grid place-content-center">
            <ProgressRing radius={22} progress={100} className="stroke-brand-500/30" />
          </div>
          <div className="absolute top-0 left-0 grid place-content-center">
            <ProgressRing radius={22} progress={91} className={cn(danger ? "stroke-red-500" : "stroke-brand-500")} />
          </div>

          <div className={cn(`grid place-content-center w-[44px] h-[44px]`)}>
            <Avatar className="w-[18px] h-[18px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-xs">C</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    );
  };
  const expanded = () => {
    return (
      <>
        <div className={cn("mx-2  rounded-md p-2 mt-auto mb-2 flex flex-col gap-3 relative", danger ? "bg-red-200/50 [&_p]:text-red-500" : "bg-brand-200/50")}>
          <Avatar className="absolute -top-6">
            <AvatarImage src="https://github.com/shadcn.pngg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mt-6">
            <p className="text-xs font-bold">Available Storage</p>
            <p className="text-xs">95 GB/ 100 GB</p>
          </div>
          <Progress value={8529 / 120} className={cn("w-full")} label={progressLabel} />
          <Button className={cn("w-full text-xs h-8", danger && " bg-red-500 hover:bg-red-600/70")}>Buy More</Button>
        </div>
      </>
    );
  };

  return isCollapsed ? collapsed() : expanded();
}
