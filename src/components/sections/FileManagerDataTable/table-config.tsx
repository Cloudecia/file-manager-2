import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "../../reusables/ui/checkbox";
import DataTableColumnHeader from "./DataTableColumnHeader";
import { GoFileDirectory } from "react-icons/go";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../reusables/ui/dropdown-menu";
import { Button } from "../../reusables/ui/button";
import { MoreHorizontal } from "lucide-react";
import RowActionsDropDown from "../../elements/RowActionsDropDown";
export const columnHelper = createColumnHelper<File>();

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
  columnHelper.accessor((row) => row.attributes.name, {
    id: "fileName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="First Name" />,
    cell: (props) => (
      <div className="flex items-center gap-2">
        <GoFileDirectory className="w-5 h-5 relative bottom-[2px]" /> <span>{props.getValue()}</span>
      </div>
    ),
    meta: {
      className: "basis-6/12 grow",
    },
  }),
  columnHelper.accessor((row) => row.attributes.lastModifiedOn, {
    id: "lastModifiedOn",
    header: () => <span className="hidden  sm:inline-block  ">Last Modified</span>,
    cell: (props) => (
      <span className="hidden sm:inline-block">
        {formatDistanceToNow(new Date(props.getValue()), {
          includeSeconds: true,
          addSuffix: true,
        })}
      </span>
    ),
    meta: {
      className: "basis-3/12",
    },
  }),
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
            <RowActionsDropDown />
          </DropdownMenu>
        </div>
      );
    },
    meta: {
      className: "basis-1/12",
    },
  }),
];
