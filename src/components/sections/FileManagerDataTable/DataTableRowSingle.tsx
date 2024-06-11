import { ContextMenu, ContextMenuTrigger } from "@/components/reusables/ui/context-menu";
import { TableCell, TableRow } from "@/components/reusables/ui/table";
import { cn } from "@/utils/shadcn-helper";
import { flexRender } from "@tanstack/react-table";
import DataTableContextMenuContent from "./DataTableContextMenuContent";

export default function DataTableRowSingle({ row, view }) {
  return (
    <>
      {/* TODO 240612 - Commented out the row context menu - will think later whether to reimplement or not */}
      {/* <ContextMenu>
        <ContextMenuTrigger> */}
      <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className={cn(view && "border-none flex flex-col", "cursor-pointer")}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id} className={`${cell.column.columnDef?.meta && cell.column.columnDef.meta?.className}`}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
      {/* </ContextMenuTrigger>
        <DataTableContextMenuContent />
      </ContextMenu> */}
    </>
  );
}
