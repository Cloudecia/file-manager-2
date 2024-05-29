import { cn } from "../../../utils/shadcn-helper";
import { Avatar, AvatarFallback, AvatarImage } from "../../reusables/ui/avatar";
import { Button } from "../../reusables/ui/button";
import { Progress } from "../../reusables/ui/progress";

export default function ExpandedStorageStatus({ danger, progressLabel, storage }) {
  return (
    <div className={cn("mx-2  rounded-md p-2 mt-auto mb-2 flex flex-col gap-3 relative", danger ? "bg-red-200/50 [&_p]:text-red-500" : "bg-brand-200/50")}>
      <Avatar className="absolute -top-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <div className="mt-6">
        <p className="text-xs font-bold">Available Storage</p>
        <p className="text-xs">95 GB/ 100 GB</p>
      </div>
      <Progress value={8529 / 120} className={cn("w-full")} label={progressLabel} />
      <Button className={cn("w-full text-xs h-8", danger && " bg-red-500 hover:bg-red-600/70")}>Buy More</Button>
    </div>
  );
}
