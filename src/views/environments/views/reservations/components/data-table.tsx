import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/views/components/ui/table';
import { CheckCircle, Clock, XCircle } from '@phosphor-icons/react';
import { differenceInMinutes, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Boxes, ParkingSquare, Projector, Tv, Wifi } from 'lucide-react';

const amenityIcons: Record<string, JSX.Element> = {
  Wifi: <Wifi className="w-4 h-4" />,
  TV: <Tv className="w-4 h-4" />,
  'Data Show': <Projector className="w-4 h-4" />,
  'Estacionamento Gratuito': <ParkingSquare className="w-4 h-4" />,
};

export function ReservationsTable() {
  const reservations = [
    {
      id: 1,
      roomName: 'Sala de Reuniões 101',
      requester: 'João Silva',
      startDateTime: '2024-05-15T09:00:00',
      endDateTime: '2024-05-15T11:00:00',
      status: 'approved',
      amenities: ['Wifi', 'Data Show', 'Ar Condicionado'],
    },
    {
      id: 2,
      roomName: 'Auditório Principal',
      requester: 'Maria Souza',
      startDateTime: '2024-05-16T14:00:00',
      endDateTime: '2024-05-16T17:00:00',
      status: 'pending',
      amenities: ['Wifi', 'Data Show', 'Som', 'Cadeiras para 50 pessoas'],
    },
    {
      id: 3,
      roomName: 'Sala de Treinamento',
      requester: 'Carlos Oliveira',
      startDateTime: '2024-05-17T08:30:00',
      endDateTime: '2024-05-17T12:30:00',
      status: 'rejected',
      amenities: ['Wifi', 'TV', 'Quadro Branco', 'Ar Condicionado'],
    },
    {
      id: 4,
      roomName: 'Sala de Criatividade',
      requester: 'Ana Santos',
      startDateTime: '2024-05-18T10:00:00',
      endDateTime: '2024-05-18T12:00:00',
      status: 'approved',
      amenities: ['Wifi', 'Quadro Branco', 'Mesa colaborativa'],
    },
    {
      id: 5,
      roomName: 'Sala de Reuniões 102',
      requester: 'Pedro Costa',
      startDateTime: '2024-05-19T13:00:00',
      endDateTime: '2024-05-19T15:00:00',
      status: 'pending',
      amenities: ['Wifi', 'Ar Condicionado', 'Teleconferência'],
    },
  ];

  function formatDateTime(startIsoString: string, endIsoString: string) {
    const startDate = new Date(startIsoString);
    const endDate = new Date(endIsoString);
    const durationMinutes = differenceInMinutes(endDate, startDate);

    const formattedStart = format(startDate, "dd/MM/yyyy 'às' HH:mm", {
      locale: ptBR,
    });
    const formattedEnd = format(endDate, 'HH:mm', { locale: ptBR });

    const durationHours = Math.floor(durationMinutes / 60);
    const durationRemainderMinutes = durationMinutes % 60;

    const durationString =
      durationHours > 0
        ? `${durationHours}h${
            durationRemainderMinutes > 0
              ? ` ${durationRemainderMinutes}min`
              : ''
          }`
        : `${durationRemainderMinutes}min`;

    return `De: ${formattedStart} até: ${formattedEnd} (${durationString})`;
  }

  function renderStatus(status: string) {
    switch (status) {
      case 'approved':
        return (
          <span className="flex items-center gap-1 text-green-500">
            <CheckCircle weight="fill" className="size-4" />
            Aprovado
          </span>
        );
      case 'rejected':
        return (
          <span className="flex items-center gap-1 text-red-500">
            <XCircle weight="fill" className="size-4" />
            Recusado
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-amber-500">
            <Clock weight="fill" className="size-4" />
            Pendente
          </span>
        );
    }
  }

  return (
    <div className="container px-0">
      <div className="relative w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-primary">Sala</TableHead>
              <TableHead className="font-bold text-primary">
                Requisitante
              </TableHead>
              <TableHead className="font-bold text-primary">Período</TableHead>
              <TableHead className="font-bold text-primary">Status</TableHead>
              <TableHead className="font-bold text-primary text-end">
                Comodidades
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((reservation) => (
              <TableRow key={reservation.id} className="hover:bg-muted/50">
                <TableCell className="p-2 font-medium">
                  {reservation.roomName}
                </TableCell>
                <TableCell className="p-2">{reservation.requester}</TableCell>
                <TableCell className="p-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {formatDateTime(
                        reservation.startDateTime,
                        reservation.endDateTime,
                      )}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {format(
                        new Date(reservation.startDateTime),
                        'dd/MM/yyyy',
                        {
                          locale: ptBR,
                        },
                      )}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="p-2">
                  {renderStatus(reservation.status)}
                </TableCell>
                <TableCell className="p-2 flex justify-end">
                  <div className="flex flex-wrap gap-1">
                    {reservation.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-gray-700"
                        title={amenity}>
                        {amenityIcons[amenity] || <Boxes className="w-3 h-3" />}
                        <span className="text-xs">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
