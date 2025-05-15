import { Button } from '@/views/components/ui/button';
import { Separator } from '@/views/components/ui/separator';
import clsx from 'clsx';
import { Boxes, ParkingSquare, Projector, Tv, Wifi } from 'lucide-react';
import { RoomProps } from './mock';

interface RoomDetailsProps {
  room: RoomProps;
}

const amenityIcons: Record<string, JSX.Element> = {
  Wifi: <Wifi className="w-4 h-4" />,
  TV: <Tv className="w-4 h-4" />,
  'Data Show': <Projector className="w-4 h-4" />,
  'Estacionamento Gratuito': <ParkingSquare className="w-4 h-4" />,
};

export function RoomDetails({ room }: RoomDetailsProps) {
  return (
    <div className={clsx('w-[40%] animate-slidein700 opacity-0')}>
      <div className="py-10 px-4 flex flex-col gap-4 sticky top-0">
        <div className="w-full h-64 relative rounded-xl overflow-hidden">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-foreground">
            {room.title}
          </h2>
          <p className="text-sm text-muted-foreground">{room.location}</p>
        </div>

        <Separator />

        <div className="text-sm text-muted-foreground space-y-1">
          <p>
            <strong className="text-foreground">Detalhes:</strong>{' '}
            {room.details}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <strong className="text-foreground w-full">Comodidades:</strong>
            {room.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-foreground">
                {amenityIcons[amenity] || <Boxes className="w-4 h-4" />}
                <span className="text-xs">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex items-center gap-2">
          <span className="text-sm text-foreground font-medium">
            Avaliação:
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-foreground">
              {room.rating.toFixed(1)}
            </span>
            <div className="w-1 h-1 bg-amber-300 rounded-full border border-amber-500" />
            <span className="text-sm text-muted-foreground">
              ({room.reviews} avaliações)
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-xl font-semibold text-foreground">
              {room.maxAvailabilityTime}
            </span>
            <span className="text-sm text-muted-foreground ml-1">/hr</span>
          </div>
          <Button variant="default">Reservar agora</Button>
        </div>
      </div>
    </div>
  );
}
