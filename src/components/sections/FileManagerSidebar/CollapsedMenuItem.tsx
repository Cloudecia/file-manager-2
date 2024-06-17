import { Link } from "react-router-dom";
import { cn } from "../../../utils/shadcn-helper";
import { motion } from "framer-motion";

export default function CollapsedMenuItem({ id, url, isActive, Icon }) {
  return (
    <Link
      key={id}
      to={url}
      className={cn(
        `relative z-10 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-secondary-foreground hover:bg-brand-200/10  justify-start text-ellipsis bg-transparent px-3 grid place-content-center py-2`
      )}
    >
      {" "}
      <Icon />
      {isActive && <motion.div layoutId="actve" className="absolute inset-0 bg-brand-200/20 shadow-lg rounded-lg" />}
    </Link>
  );
}
