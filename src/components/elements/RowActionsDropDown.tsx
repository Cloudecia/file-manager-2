import { MdOutlineDelete, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TbCopyPlus, TbCut, TbDownloadOff, TbInfoCircleFilled } from "react-icons/tb";
import { useCopyFile } from "../../hooks/tanstack-query-hooks/useCopyFiles";
import useDownloadFile from "../../hooks/tanstack-query-hooks/useDownloadFIle";
import { useGetFileInfo } from "../../hooks/tanstack-query-hooks/useGetFileInfo";
import { useMoveFile } from "../../hooks/tanstack-query-hooks/useMoveFiles";
import useFileCutCopy from "../../hooks/zustand-hooks/useFileCutCopy";
import useFileId from "../../hooks/zustand-hooks/useFileId";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../reusables/ui/dropdown-menu";
import DeleteDialogBox from "./DeleteDialogBox";
import RenameDialogBox from "./RenameDialogBox";

export default function RowActionsDropDown({ data }) {
  // console.log({ data });

  const fileIdAdd = useFileId();
  const { copyFileFn } = useCopyFile();
  const { moveFileFn } = useMoveFile();
  const downloadFileFn = useDownloadFile();

  const { fileInfo, isLoading, fileInfoFetcher } = useGetFileInfo(data);
  const fileCutCopy = useFileCutCopy();

  async function fileInfoHandler() {
    fileIdAdd.onAddId(data.fileId);

    try {
      await fileInfoFetcher();
    } catch (error) {
      console.log({ error });
    }
  }

  async function cutCopyFileHandler(e, op: "copy" | "cut", fileId: string, parentId: string) {
    // console.log({ fileId });

    fileCutCopy.onAdd(op, fileId, parentId);
  }

  // TODO: NOT WORKING IN THIS PAGE PRORPERLY 240610
  // async function pasteHandler(e) {
  //   const { op, fileId, parentId } = fileCutCopy;

  //   if (!op && !fileId && !parentId) return;
  //   else {
  //     if (op == "cut") {
  //       moveFileFn({ fileIds: [fileId], destinationParentId: parentId });
  //     } else if (op == "copy") {
  //       copyFileFn({ fileIds: [fileId], parentId });
  //     }
  //   }
  // }

  // useEffect(() => {
  //   console.log({ fileInfo });
  // }, [fileInfo]);

  async function downloadFileHandler() {
    await downloadFileFn(data.fileId);
  }

  // useEffect(() => {
  //   console.log({ op: fileCutCopy.op, fileId: fileCutCopy.fileId, parentId: fileCutCopy.parentId });
  // }, [fileCutCopy.op, fileCutCopy.fileId, fileCutCopy.parentId]);

  if (isLoading) return "loading";

  return (
    <DropdownMenuContent align="end" className="min-w-52">
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer" onClick={fileInfoHandler}>
        <TbInfoCircleFilled /> File Information
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer" onClick={downloadFileHandler}>
        <TbDownloadOff /> Download
      </DropdownMenuItem>
      <RenameDialogBox data={data}>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="flex gap-2 items-center cursor-pointer">
          <MdOutlineDriveFileRenameOutline /> Rename
        </DropdownMenuItem>
      </RenameDialogBox>

      <DropdownMenuSeparator />

      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer" onClick={(e) => cutCopyFileHandler(e, "cut", data.fileId, data.parentId)}>
        <TbCut /> Cut
      </DropdownMenuItem>
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer" onClick={(e) => cutCopyFileHandler(e, "copy", data.fileId, data.parentId)}>
        <TbCopyPlus /> Copy
      </DropdownMenuItem>
      {/* <DropdownMenuItem className="flex gap-2 items-center cursor-pointer" onClick={(e) => pasteHandler(e)}>
        <ImPaste /> Paste
      </DropdownMenuItem> */}
      <DropdownMenuSeparator />
      <DeleteDialogBox data={data}>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="flex gap-2 items-center cursor-pointer">
          <MdOutlineDelete /> Delete
        </DropdownMenuItem>
      </DeleteDialogBox>
    </DropdownMenuContent>
  );
}
