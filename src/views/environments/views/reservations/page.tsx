import { Separator } from '@/views/components/ui/separator';
import { ReservationsTable } from './components/data-table';

export function Reservations() {
  return (
    <div>
      <div className="flex items-end justify-between px-4 py-6 border-b">
        <h1 className="text-3xl font-semibold">Reservas</h1>
        <span className="text-sm text-muted-foreground">
          {new Date().getDate()}
        </span>
      </div>

      <Separator className="h-[10px] bg-[#f5f5f5] mb-8" />

      <div className="w-full flex animate-slidein500 opacity-0">
        <ReservationsTable />
      </div>
    </div>
  );
}
