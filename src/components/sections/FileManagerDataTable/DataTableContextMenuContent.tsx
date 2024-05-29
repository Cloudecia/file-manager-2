import { ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "@/components/reusables/ui/context-menu";
import { ImPaste } from "react-icons/im";
import { MdOutlineDelete, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TbCopyPlus, TbCut, TbDownloadOff, TbInfoCircle } from "react-icons/tb";

import DeleteDialogBox from "../../elements/DeleteDialogBox";
import RenameDialogBox from "../../elements/RenameDialogBox";

export default function DataTableContextMenuContent() {
  return (
    <>
      <ContextMenuContent className="w-52 bg-white">
        <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
          <TbInfoCircle /> File Information
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
          <TbDownloadOff /> Download
        </ContextMenuItem>
        <RenameDialogBox>
          <ContextMenuItem className="flex gap-2 items-center cursor-pointer" onSelect={(e) => e.preventDefault()}>
            <MdOutlineDriveFileRenameOutline /> Rename
          </ContextMenuItem>
        </RenameDialogBox>

        <ContextMenuSeparator />
        <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
          <TbCut /> Cut
        </ContextMenuItem>
        <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
          <TbCopyPlus /> Copy
        </ContextMenuItem>
        <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
          <ImPaste /> Paste
        </ContextMenuItem>
        <ContextMenuSeparator />
        <DeleteDialogBox>
          <ContextMenuItem className="flex gap-2 items-center cursor-pointer" onSelect={(e) => e.preventDefault()}>
            <MdOutlineDelete /> Delete
          </ContextMenuItem>
        </DeleteDialogBox>
      </ContextMenuContent>
    </>
  );
}
