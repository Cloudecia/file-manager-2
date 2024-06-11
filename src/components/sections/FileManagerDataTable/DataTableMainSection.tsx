// import { Table } from "@tanstack/react-table";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/reusables/ui/table";
import { flexRender } from "@tanstack/react-table";
import DataTableNoRows from "./DataTableNoRows";
import DataTableRowSingle from "./DataTableRowSingle";
// type Props = {
//   table: Table;
//   view: any;
// };

const DataTableMainSection = ({ table, view, columns }) => {
  return (
    <Table>
      <TableHeader className={view && "hidden"}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} className={`${header.column.columnDef?.meta && header.column.columnDef.meta?.className}`}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className={view && "grid grid-cols-4"}>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => <DataTableRowSingle row={row} view={view} />)
        ) : (
          <DataTableNoRows columns={columns} />
        )}
      </TableBody>
    </Table>
  );
};

export default DataTableMainSection;
