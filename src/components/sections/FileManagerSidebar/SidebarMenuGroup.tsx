import { useLocation } from "react-router-dom";
import { SidebarMenuGroupLabel } from "./SidebarMenuGroupLabel";
import { Fragment } from "react";
import CollapsedMenuItem from "./CollapsedMenuItem";
import ExpandedMenuItem from "./ExpandedMenuItem";

export function SidebarMenuGroup({ item, isCollapsed }) {
  const { pathname } = useLocation();

  return (
    <Fragment key={item.id}>
      <div className="space-y-3">
        <SidebarMenuGroupLabel {...{ isCollapsed, item }} />

        <div className="flex flex-col gap-2">
          {item.children.map(({ id, url, title, icon: Icon }) => {
            const isActive = url == pathname;

            return <>{isCollapsed ? <CollapsedMenuItem {...{ id, url, Icon, isActive }} /> : <ExpandedMenuItem {...{ id, url, Icon, isActive, title }} />}</>;
          })}
        </div>
      </div>
    </Fragment>
  );
}
