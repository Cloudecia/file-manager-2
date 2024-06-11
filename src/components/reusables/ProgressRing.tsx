import { cn } from "../../utils/shadcn-helper";

export default function ProgressRing(props: { radius: number; strokeWidth?: number; progress: number; className?: string }) {
  const { radius, strokeWidth = 4, progress, className } = props;

  if (!radius && !strokeWidth) {
    throw new Error("Provide radius and stroke");
  }

  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress * circumference) / 100;

  // console.log({ radius, strokeWidth, normalizedRadius, circumference, strokeDashoffset });

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        fill="transparent"
        strokeWidth={4}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        className={cn(className, "origin-center -rotate-90")}
      />
    </svg>
  );
}
