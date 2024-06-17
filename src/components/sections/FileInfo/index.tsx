import React from "react";
import { cn } from "../../../utils/shadcn-helper";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { Separator } from "../../reusables/ui/separator";
import { useGetFileInfo } from "../../../hooks/tanstack-query-hooks/useGetFileInfo";
import useFileId from "../../../hooks/zustand-hooks/useFileId";
import { filesize } from "filesize";
import fileTypes from "../../../config/constants/fileTypes";
import FileIcon from "../../elements/FileIcon";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { useQueryClient } from "@tanstack/react-query";
import useFileInfoBox from "../../../hooks/zustand-hooks/useFileInfoBox";
type Props = {
  className: string;
};

const Index = ({ className }: Props) => {
  const fileInfoBox = useFileInfoBox();

  const queryClient = useQueryClient();

  const fileIdAdd = useFileId();

  const data = useGetFileInfo({ fileId: fileIdAdd.fileId });

  const { isLoading = true, fileInfo = {} } = data;

  const loading = isLoading || !fileInfo;

  // if (isLoading || !fileInfo) return "";

  const { id = "", name = "", mimeType = "", modifiedTime = new Date().toISOString(), createdTime = new Date().toISOString(), size = 0 } = fileInfo;

  const fileProperties = [
    {
      property: "Path",
      value: !loading ? "/usr/home/new" : "&nbsp;",
    },
    {
      property: "Type",
      value: !loading ? mimeType : "&nbsp;",
    },
    {
      property: "Size",
      value: !loading ? (mimeType == fileTypes.folder ? "---" : filesize(size)) : 0,
    },
    {
      property: "Created",
      value: !loading ? new Date(createdTime).toISOString() : "&nbsp;",
    },
    {
      property: "Modified",
      value: !loading ? new Date(modifiedTime).toISOString() : "&nbsp;",
    },
  ];

  function closeHandler() {
    fileInfoBox.onClose();
    // queryClient.removeQueries({
    //   queryKey: ["file", "root"],
    // });
  }

  return (
    <aside className={cn(className, "hidden sm:flex flex-col px-4")}>
      {/* file name with close icon */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2 hover:underline cursor-pointer">
          {!loading ? (
            <FileIcon className="w-5 h-5 relative bottom-[2px]" mimeType={mimeType} />
          ) : (
            <AiOutlineFileUnknown className="w-5 h-5 relative bottom-[2px]" />
          )}

          <span className="max-w-[15ch] whitespace-nowrap text-ellipsis overflow-hidden">{!loading ? name : "Loading..."}</span>
        </div>
        <div className="cursor-pointer" onClick={closeHandler}>
          <FaTimes />
        </div>
      </div>
      {/* file icon with dummy icons for now */}
      <div className="grid place-content-center my-8">
        {!loading ? (
          <FileIcon className={`w-32 h-32 relative bottom-[2px] ${mimeType == fileTypes.folder ? "cursor-pointer" : ""}`} mimeType={mimeType} />
        ) : (
          <AiOutlineFileUnknown className={`w-32 h-32 relative bottom-[2px]`} />
        )}
      </div>
      <Separator className="border-b-[1px]" />
      <div className="py-4 flex flex-col gap-5">
        <h3 className="text-lg">{!loading ? name : "Loading..."}</h3>

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

export default Index;
