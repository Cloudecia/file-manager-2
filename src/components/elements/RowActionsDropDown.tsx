import { TbCopyPlus, TbCut, TbDownloadOff, TbInfoCircleFilled } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../reusables/ui/dropdown-menu";
import RenameDialogBox from "./RenameDialogBox";
import { MdOutlineDelete, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { ImPaste } from "react-icons/im";
import DeleteDialogBox from "./DeleteDialogBox";

export default function RowActionsDropDown() {
  return (
    <DropdownMenuContent align="end" className="min-w-52">
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <TbInfoCircleFilled /> File Information
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <TbDownloadOff /> Download
      </DropdownMenuItem>
      <RenameDialogBox>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="flex gap-2 items-center cursor-pointer">
          <MdOutlineDriveFileRenameOutline /> Rename
        </DropdownMenuItem>
      </RenameDialogBox>

      <DropdownMenuSeparator />

      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <TbCut /> Cut
      </DropdownMenuItem>
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <TbCopyPlus /> Copy
      </DropdownMenuItem>
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <ImPaste /> Paste
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DeleteDialogBox>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="flex gap-2 items-center cursor-pointer">
          <MdOutlineDelete /> Delete
        </DropdownMenuItem>
      </DeleteDialogBox>
    </DropdownMenuContent>
  );
}
