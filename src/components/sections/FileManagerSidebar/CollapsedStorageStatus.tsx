import { cn } from "../../../utils/shadcn-helper";
import ProgressRing from "../../reusables/ProgressRing";
import { Avatar, AvatarFallback, AvatarImage } from "../../reusables/ui/avatar";

export default function CollapsedStorageStatus({ danger, storage }) {
  return (
    <div className="mx-2 mb-2 mt-auto">
      <div className="relative">
        <div className="absolute top-0 left-0 grid place-content-center">
          <ProgressRing radius={22} progress={100} className="stroke-brand-500/30" />
        </div>
        <div className="absolute top-0 left-0 grid place-content-center">
          <ProgressRing radius={22} progress={91} className={cn(danger ? "stroke-red-500" : "stroke-brand-500")} />
        </div>

        <div className={cn(`grid place-content-center w-[44px] h-[44px]`)}>
          <Avatar className="w-[18px] h-[18px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-xs">C</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
