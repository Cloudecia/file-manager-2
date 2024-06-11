import { Button } from "@/components/reusables/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/reusables/ui/dropdown-menu";
import { Input } from "@/components/reusables/ui/input";
import { MdOutlineDriveFolderUpload, MdOutlineUploadFile } from "react-icons/md";

import { GiClick } from "react-icons/gi";
import NewFolderDialogBox from "../../elements/NewFolderDialogBox";
import axios from "axios";
import useFileCutCopy from "../../../hooks/zustand-hooks/useFileCutCopy";
import useRouteParent from "../../../hooks/useRouteParent";
import { useEffect } from "react";
import { useCopyFile } from "../../../hooks/tanstack-query-hooks/useCopyFiles";
import { useMoveFile } from "../../../hooks/tanstack-query-hooks/useMoveFiles";

export default function DataTablePreStartSection({ table }) {
  const { copyFileFn } = useCopyFile();
  const { moveFileFn } = useMoveFile();

  const { fileId: clipBoardFile, op: clipBoardOp, parentId } = useFileCutCopy();

  let { routeParent } = useRouteParent();

  console.log({ routeParent });

  async function pasteHandler(e) {
    // const { op, fileId, parentId } = fileCutCopy;

    if (!clipBoardOp && !clipBoardFile && !parentId) return;
    else {
      if (clipBoardOp == "cut") {
        moveFileFn({ fileIds: [clipBoardFile], destinationParentId: routeParent });
      } else if (clipBoardOp == "copy") {
        copyFileFn({ fileIds: [clipBoardFile], parentId: routeParent });
      }
    }
  }

  // useEffect(() => {
  //   console.log({ routeParent });
  // }, [routeParent]);

  // TODO: 240610 - NOT WORKING
  async function fileDownloadHandler(rows) {
    let fileIds = rows.map((row) => row.original.id);

    let { data } = await axios.get(`/api/file-manager/file/${fileIds[0]}/download`);

    console.log({ data });
  }

  return (
    <div className="flex flex-col md:flex-row  items-center justify-between gap-4 mb-4 px-2 sm:px-0">
      <Input
        placeholder="Filter by file name"
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
        className="max-w-sm"
      />
      {table.getFilteredSelectedRowModel().rows.length > 0 && (
        <>
          {/* <pre>{JSON.stringify(table.getFilteredSelectedRowModel().rows, null, 4)}</pre> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto h-12 flex gap-2 me-auto">
                <GiClick className="w-4 h-4 relative bottom-[1px]" /> <span>{table.getFilteredSelectedRowModel().rows.length} selected</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-52">
              <DropdownMenuItem
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => fileDownloadHandler(table.getFilteredSelectedRowModel().rows)}
              >
                <MdOutlineUploadFile className="relative bottom-[2px]" /> Download
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
                <MdOutlineDriveFolderUpload className="relative bottom-[2px]" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}

      {clipBoardFile && (
        <Button className="w-full md:w-auto h-12 flex gap-2 me-auto" onClick={pasteHandler}>
          {clipBoardOp == "copy" ? "Copy" : "Move"} Here
        </Button>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-12 w-full md:w-auto">Add New</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-52">
          <NewFolderDialogBox />

          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
            <MdOutlineUploadFile className="relative bottom-[2px]" /> File Upload
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
            <MdOutlineDriveFolderUpload className="relative bottom-[2px]" /> Folder Upload
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
