import { TableCell, TableRow } from "@/components/reusables/ui/table";

export default function DataTableNoRows() {
  return (
    <TableRow>
      <TableCell colSpan={columns.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
}
