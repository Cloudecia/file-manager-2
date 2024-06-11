import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "../../reusables/ui/checkbox";
import DataTableColumnHeader from "./DataTableColumnHeader";
import { GoFileDirectory } from "react-icons/go";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../reusables/ui/dropdown-menu";
import { Button } from "../../reusables/ui/button";
import { MoreHorizontal } from "lucide-react";
import RowActionsDropDown from "../../elements/RowActionsDropDown";
import { CiFileOn } from "react-icons/ci";
import { VscFileBinary } from "react-icons/vsc";
import { filesize } from "filesize";
import FileIcon from "../../elements/FileIcon";
import { useSearchParams } from "react-router-dom";
import fileTypes from "../../../config/constants/fileTypes";

export const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="block"
      />
    ),
    cell: ({ row }) => (
      <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" className="block" />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "basis-1/12",
    },
  }),
  // columnHelper.accessor("name"),

  // columnHelper.accessor("id"),
  columnHelper.accessor(
    (row) => {
      // console.log(row);
      return row.name;
    },
    {
      id: "name",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
      cell: (props) => {
        // console.log({ props });
        return (
          <div className={`flex items-center gap-2 ${props.row.original.mimeType == fileTypes.folder ? "hover:underline" : ""}`}>
            <FileIcon mimeType={props.row.original.mimeType} className="w-5 h-5 relative bottom-[2px]" />
            <span>{props.getValue()}</span>
          </div>
        );
      },
      meta: {
        className: "basis-5/12 grow",
      },
    }
  ),
  columnHelper.accessor((row) => row.modifiedTime, {
    id: "lastModifiedOn",
    header: () => <span className="hidden  lg:inline-block  ">Trashed Time</span>,
    cell: (props) => (
      <span className="hidden lg:inline-block">
        {formatDistanceToNow(new Date(props.getValue()), {
          includeSeconds: true,
          addSuffix: true,
        })}
      </span>
    ),
    meta: {
      className: "basis-2/12",
    },
  }),

  // columnHelper.accessor((row) => row.trashedTime, {
  //   id: "lastModifiedOn",
  //   header: () => <span className="hidden  lg:inline-block  ">Trashed Time</span>,
  //   cell: (props) => (
  //     <span className="hidden lg:inline-block">
  //       {formatDistanceToNow(new Date(props.getValue()), {
  //         includeSeconds: true,
  //         addSuffix: true,
  //       })}
  //     </span>
  //   ),
  //   meta: {
  //     className: "basis-2/12",
  //   },
  // }),

  columnHelper.accessor((row) => row.size, {
    id: "size",
    header: () => <span className="hidden  lg:inline-block  ">File Size</span>,
    cell: (props) => (
      <span className="hidden lg:inline-block">
        {props.row.original.mimeType !== "application/vnd.google-apps.folder" ? filesize(props.getValue(), { round: 0 }) : "---"}
      </span>
    ),
    meta: {
      className: "basis-2/12",
    },
  }),
  // columnHelper.accessor("mimeType"),
  columnHelper.display({
    id: "actions",
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <RowActionsDropDown data={{ fileId: row.original.id, parentId: row.original.parents[0] }} />
          </DropdownMenu>
        </div>
      );
    },
    meta: {
      className: "basis-1/12",
    },
  }),
];
