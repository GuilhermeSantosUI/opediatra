'use client';

import {
  ColumnDef,
  flexRender,
  Table as TanTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/views/components/ui/table';

import { DataTablePagination } from '@/views/components/pagination';

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  table: TanTable<TData>;
  page: number;
  size: number;
  totalRows: number;
  onPaginationChange: (page: number, size: number) => void;
};

export function DataTable<TData, TValue>({
  columns,
  table,
  page,
  size,
  totalRows,
  onPaginationChange,
}: DataTableProps<TData, TValue>) {
  function handlePageChange(newPage: number) {
    if (newPage !== page) {
      onPaginationChange(newPage, size);
    }
  }

  function handlePageSizeChange(newSize: number) {
    if (newSize !== size) {
      table.setPageSize(newSize);
      onPaginationChange(0, newSize);
    }
  }

  return (
    <div className="animate-slidein500 opacity-0">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-96 text-center">
                Pelo visto, nenhum dado foi encontrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <DataTablePagination
        table={table as TanTable<unknown>}
        page={page}
        size={size}
        totalPages={totalRows}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}
