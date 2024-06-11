import { ColumnDef, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

import DataTableMainSection from "./DataTableMainSection";
import TrashDataTablePreStartSection from "./TrashDataTablePreStartSection";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function TrashDataTable<TData, TValue>({ columns, data, view }: DataTableProps<TData, Tvalue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

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

  return (
    <main className="relative flex-col gap-4">
      <TrashDataTablePreStartSection table={table} />
      <DataTableMainSection table={table} view={view} columns={columns} />
    </main>
  );
}
