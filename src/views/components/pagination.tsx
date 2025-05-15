import { Button } from '@/views/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/views/components/ui/select';
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';
import { Table } from '@tanstack/react-table';

type DataTablePaginationProps<TData> = {
  table: Table<TData>;
  page: number;
  size: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void | undefined;
};

export function DataTablePagination<TData>({
  table,
  page,
  size,
  totalPages,
  onPageChange,
  onPageSizeChange,
}: DataTablePaginationProps<TData>) {
  const totalItems = Math.ceil(totalPages * size);

  return (
    <div className="flex items-center justify-between my-5 text-slate-900 dark:text-slate-200">
      <div className="flex-1 text-sm text-muted-foreground hidden sm:flex">
        {totalItems} Item(ns) encontrado(s).
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8 justify-between sm:justify-normal w-full sm:w-fit">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium hidden sm:flex">
            Linhas por página
          </p>

          <Select
            value={`${size}`}
            onValueChange={(value) => {
              const newSize = Number(value);
              table.setPageSize(newSize);
              if (onPageSizeChange) {
                onPageSizeChange(newSize);
              }
            }}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={`${size}`} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-[120px] items-center justify-center text-sm font-medium">
          Página {page + 1} de {totalPages}
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => onPageChange(0)}
            disabled={page === 0}>
            <span className="sr-only">Ir para a primeira página</span>
            <CaretDoubleLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 0}>
            <span className="sr-only">Ir para a página anterior</span>
            <CaretLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(page + 1)}
            disabled={page + 1 >= totalPages}>
            <span className="sr-only">Ir para a próxima página</span>
            <CaretRight className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => onPageChange(totalPages - 1)}
            disabled={page + 1 >= totalPages}>
            <span className="sr-only">Ir para a última página</span>
            <CaretDoubleRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
