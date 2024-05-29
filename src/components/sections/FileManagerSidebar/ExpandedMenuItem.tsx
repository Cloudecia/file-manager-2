import { Link } from "react-router-dom";

export default function ExpandedMenuItem({ id, url, isActive, Icon, title }) {
  return (
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
  );
}
