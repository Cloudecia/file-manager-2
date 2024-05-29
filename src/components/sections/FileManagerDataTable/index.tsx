import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/reusables/ui/table";
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

import DataTableNoRows from "./DataTableNoRows";
import DataTablePostFinishSection from "./DataTablePostFinishSection";
import DataTablePreStartSection from "./DataTablePreStartSection";
import DataTableRowSingle from "./DataTableRowSingle";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DataTable<TData, TValue>({ columns, data, view }: DataTableProps<TData, Tvalue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      rowSelection,
      columnFilters,
    },
  });

  // TODO 240522 - FACING ISSUE IN IMPLEMENTING GRID VIEW, I HAVE SET UP THE STATE, BUT THE DESIGN IS BAD, VERY BAD

  function dropHandler(e) {
    e.preventDefault();
    setDragOver(false);
    console.log({ e });
    const files = e.dataTransfer.files;

    if (!files.length) {
      return;
    }

    uploadFiles(files);
  }

  function dragOverHandler(e) {
    e.preventDefault();
    setDragOver(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDragOver(false);
  }

  function uploadFiles(files) {
    alert("Check Console, this upload function is going to upload the file to the server");
    console.log(files);
  }

  return (
    <main onDrop={dropHandler} onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler} className={dragOver && "relative"}>
      {dragOver && (
        <div className="absolute inset-0 bg-white/80 z-10 border-[1px] border-brand-500 border-dotted grid place-content-center">
          <p className="text-4xl">Drop your files to Upload</p>
        </div>
      )}
      <div className="relative flex-col gap-4">
        <DataTablePreStartSection table={table} />
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
        <DataTablePostFinishSection table={table} />
      </div>
    </main>
  );
}
