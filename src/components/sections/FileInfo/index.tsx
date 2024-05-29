import React from "react";
import { cn } from "../../../utils/shadcn-helper";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { Separator } from "../../reusables/ui/separator";

const fileProperties = [
  {
    property: "Path",
    value: "/usr/home/new",
  },
  {
    property: "Type",
    value: "Directory",
  },
  {
    property: "Size",
    value: "109 MB",
  },
  {
    property: "Created",
    value: new Date().toDateString(),
  },
  {
    property: "Modified",
    value: new Date().toDateString(),
  },
];

type Props = {
  className: string;
};

const index = ({ className }: Props) => {
  return (
    <aside className={cn(className, "hidden sm:flex flex-col px-4")}>
      {/* file name with close icon */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2 hover:underline cursor-pointer">
          <GoFileDirectoryFill className="w-5 h-5 relative bottom-[2px]" />
          <span>cloudecia-images</span>
        </div>
        <div className="cursor-pointer">
          <FaTimes />
        </div>
      </div>
      {/* file icon with dummy icons for now */}
      <div className="grid place-content-center my-8">
        <GoFileDirectoryFill className="w-32 h-32 relative bottom-[2px] cursor-pointer" />
      </div>
      <Separator className="border-b-[1px]" />
      <div className="py-4 flex flex-col gap-5">
        <h3 className="text-lg">Properties</h3>

        {fileProperties.map((val, idx) => {
          return (
            <div key={idx}>
              <p className="text-sm text-brand-500/80 italic">{val.property}</p>
              <p>{val.value}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default index;
