import { Link } from "react-router-dom";
import { cn } from "../../../utils/shadcn-helper";

export default function CollapsedMenuItem({ id, url, isActive, Icon }) {
  return (
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
  );
}
