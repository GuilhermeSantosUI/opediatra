import { Badge } from '@/views/components/ui/badge';
import { Separator } from '@/views/components/ui/separator';
import { useState } from 'react';

import { RoomProps, rooms } from './components/mock';
import { Room } from './components/room';
import { RoomDetails } from './components/room-details';

export function Events() {
  const [selectedRoom, setSelectedRoom] = useState<RoomProps>(rooms[0]);

  return (
    <div>
      <div className="flex items-end justify-between px-4 py-6 border-b">
        <h1 className="text-3xl font-semibold">Reuniões</h1>
        <span className="text-sm text-muted-foreground">
          {new Date().getDate()}
        </span>
      </div>

      <Separator className="h-[10px] bg-[#f5f5f5] mb-8" />

      <div className="w-full flex animate-slidein500 opacity-0">
        <div className="w-[60%] pb-20 flex flex-col gap-6">
          <p className="text-base text-muted-foreground">
            Salas disponíveis no SergipeTec - Parque Tecnológico de Sergipe
          </p>

          <div className="flex flex-wrap gap-1">
            {[
              'Capacidade de pessoas',
              'Ar-condicionado',
              'Quadro branco',
              'TV ou Data Show',
              'Localização',
            ].map((detail, i) => (
              <Badge
                key={i}
                variant="outline"
                className="rounded-full px-3 py-1.5 bg-white shadow-sm">
                {detail}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {rooms.map((room, index) => (
              <Room
                key={index}
                onClick={() => setSelectedRoom(room)}
                {...room}
              />
            ))}
          </div>
        </div>

        {selectedRoom && <RoomDetails room={selectedRoom} />}
      </div>
    </div>
  );
}
