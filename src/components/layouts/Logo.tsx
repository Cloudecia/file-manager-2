import { GiHamburgerMenu } from "react-icons/gi";
import useDeviceSizeCheck from "../../hooks/useDeviceSizeCheck";
import useFileManagerSidebar from "../../hooks/useFileManagerSidebar";
import { cn } from "../../utils/shadcn-helper";
import LogoEl from "../elements/Logo";
const Logo = ({ isCollapsed }: { isCollapsed: true }) => {
  const fileManagerSidebar = useFileManagerSidebar();
  const { isSm } = useDeviceSizeCheck();

  // useEffect(() => {
  //   console.log({ isSm });
  // });
  return (
    <>
      <div className={cn("flex items-center px-2 py-6", isCollapsed ? "justify-center" : "justify-between")}>
        <div
          className={cn("font-bold flex gap-1 items-baseline text-lg relative top-[2px] text-zinc-100")}
          onClick={() => {
            if (fileManagerSidebar.isCollapsed && isSm) {
              fileManagerSidebar.onOpen();
            }
          }}
        >
          <LogoEl logoWidth={24} textFontSize={24} logoFillColor="#04598a" textColor="brand-500" isCollapsed={fileManagerSidebar.isCollapsed} />
        </div>
        <div className="xl">
          {!fileManagerSidebar.isCollapsed && (
            <GiHamburgerMenu
              className="h-4 w-4  [&_*]:text-brand-500 cursor-pointer"
              onClick={() => {
                fileManagerSidebar.onToggle();
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Logo;
