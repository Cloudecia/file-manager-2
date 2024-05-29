import { cn } from "../../../utils/shadcn-helper";
import { Separator } from "../../reusables/ui/separator";

export function SidebarMenuGroupLabel({ isCollapsed, item }) {
  return (
    <>
      <h4 className={cn("mb-2 text-sm font-semibold tracking-tight text-brand-300", isCollapsed && "sr-only")}>{item.title}</h4>
      {isCollapsed && <Separator className="border-b-[0.1px] border-dotted" />}
    </>
  );
}
