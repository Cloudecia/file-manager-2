import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExpandedMenuItem({ id, url, isActive, Icon, title }) {
  return (
    <Link
      key={id}
      to={url}
      className={`relative z-10 flex gap-4 items-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-secondary-foreground hover:bg-brand-200/10 h-9 py-2 w-full justify-start text-ellipsis bg-transparent px-3 `}
    >
      {" "}
      <Icon /> <span className="text-sm">{title}</span>
      {isActive && <motion.div layoutId="actvdsfe" className="absolute inset-0 bg-brand-200/20 shadow-lg rounded-lg" />}
    </Link>
  );
}
