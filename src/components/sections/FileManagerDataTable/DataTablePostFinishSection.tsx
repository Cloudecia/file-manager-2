import React from "react";

const DataTablePostFinishSection = ({ table }) => {
  return (
    <>
      <div className="flex-1 text-sm text-muted-foreground mt-4">
        {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </>
  );
};

export default DataTablePostFinishSection;
