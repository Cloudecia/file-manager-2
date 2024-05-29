import { Fragment } from "react";

import sidebar from "@/assets/data/fileManagerSidebar";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "../reusables/ui/separator";
import { cn } from "../../utils/shadcn-helper";

const SideNav = ({ isCollapsed }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={cn(isCollapsed ? "flex flex-col items-center h-full" : "px-2")}>
        {sidebar.map((item) => {
          return (
            <Fragment key={item.id}>
              <div className="space-y-3">
                <h4 className={cn("mb-2 text-sm font-semibold tracking-tight text-brand-300", isCollapsed && "sr-only")}>{item.title}</h4>
                {isCollapsed && <Separator className="border-b-[0.1px] border-dotted" />}
                <div className="flex flex-col gap-2">
                  {item.children.map(({ id, url, title, icon: Icon }) => {
                    const isActive = url == pathname;

                    return (
                      <>
                        {isCollapsed ? (
                          <Link
                            key={id}
                            to={url}
                            className={cn(
                              `rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-secondary-foreground hover:bg-brand-200/50  justify-start text-ellipsis bg-transparent px-3 grid place-content-center py-2`,
                              isActive ? "bg-brand-200/20 shadow-lg " : "shadow-none"
                            )}
                          >
                            {" "}
                            <Icon />
                          </Link>
                        ) : (
                          <Link
                            key={id}
                            to={url}
                            className={`flex gap-4 items-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-secondary-foreground hover:bg-brand-200/50 h-9 py-2 w-full justify-start overflow-hidden text-ellipsis bg-transparent px-3 ${
                              isActive ? "bg-brand-200/20 shadow-lg " : "shadow-none"
                            }`}
                          >
                            {" "}
                            <Icon /> <span className="text-sm">{title}</span>
                          </Link>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default SideNav;
