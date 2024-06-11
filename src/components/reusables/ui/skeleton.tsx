import { cn } from "@/utils/shadcn-helper";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-brand-100/50", className)} {...props} />;
}

export { Skeleton };
