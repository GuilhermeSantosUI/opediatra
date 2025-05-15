import { Heart } from '@phosphor-icons/react';
import { Boxes, ParkingSquare, Projector, Tv, Wifi } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface RoomProps {
  image: string;
  location: string;
  title: string;
  details: string;
  amenities: string[];
  rating: number;
  reviews: number;
  maxAvailabilityTime: number;
  onClick: () => void;
}

const amenityIcons: Record<string, JSX.Element> = {
  Wifi: <Wifi className="w-3 h-3" />,
  TV: <Tv className="w-3 h-3" />,
  'Data Show': <Projector className="w-3 h-3" />,
  'Estacionamento Gratuito': <ParkingSquare className="w-3 h-3" />,
};

export function Room({
  image,
  location,
  title,
  details,
  amenities,
  rating,
  reviews,
  maxAvailabilityTime,
  onClick,
}: RoomProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function handleFavoriteClick(e: React.MouseEvent) {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
    toast.success(
      isFavorite ? 'Removido dos favoritos' : 'Adicionado aos favoritos',
      {
        duration: 2000,
        description: isFavorite
          ? 'Este quarto foi removido dos seus favoritos.'
          : 'Este quarto foi adicionado aos seus favoritos.',
      },
    );
  }

  return (
    <div
      className="flex gap-6 p-4 pt-6 border-t cursor-pointer"
      onClick={onClick}>
      <div className="w-72 h-48 relative rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex-1 flex flex-col">
            <span className="text-sm text-muted-foreground">{location}</span>
            <span className="text-xl font-medium text-gray-800">{title}</span>
          </div>
          <button
            onClick={handleFavoriteClick}
            className="p-0 rounded-full flex items-center justify-center">
            <Heart
              weight={isFavorite ? 'duotone' : 'regular'}
              className={`w-6 h-6 text-red-500 transition-all duration-300 ${
                isFavorite ? 'scale-110' : 'scale-100'
              }`}
            />
          </button>
        </div>

        <hr className="border-t border-gray-200 w-10" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span>{details}</span>
          <div className="flex flex-wrap gap-1">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-gray-700"
                title={amenity}>
                {amenityIcons[amenity] || <Boxes className="w-3 h-3" />}
                <span className="text-xs">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-gray-200 w-10" />

        <div className="flex justify-between items-end">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-gray-700">
              {rating.toFixed(1)}
            </span>
            <div className="w-1 h-1 bg-amber-300 rounded-full border border-amber-500" />
            <span className="text-sm text-gray-700">({reviews} reviews)</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-lg font-medium text-gray-800">
              {maxAvailabilityTime}
            </span>
            <span className="text-sm text-muted-foreground">/hr</span>
          </div>
        </div>
      </div>
    </div>
  );
}
