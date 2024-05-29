import { Button } from "@/components/reusables/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/reusables/ui/dropdown-menu";
import { Input } from "@/components/reusables/ui/input";
import { MdOutlineDriveFolderUpload, MdOutlineUploadFile } from "react-icons/md";

import { GiClick } from "react-icons/gi";
import NewFolderDialogBox from "../../elements/NewFolderDialogBox";

export default function DataTablePreStartSection({ table }) {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-between gap-4 mb-4 px-2 sm:px-0">
      <Input
        placeholder="Filter by filename"
        value={(table.getColumn("fileName")?.getFilterValue() as string) ?? ""}
        onChange={(event) => table.getColumn("fileName")?.setFilterValue(event.target.value)}
        className="max-w-sm"
      />
      {table.getFilteredSelectedRowModel().rows.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto h-12 flex gap-2 me-auto">
              <GiClick className="w-4 h-4 relative bottom-[1px]" /> <span>{table.getFilteredSelectedRowModel().rows.length} selected</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-52">
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <MdOutlineUploadFile className="relative bottom-[2px]" /> Download
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <MdOutlineDriveFolderUpload className="relative bottom-[2px]" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
