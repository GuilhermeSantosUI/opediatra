import { Button } from '@/views/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from '@/views/components/ui/dialog';
import { QrCode } from '@phosphor-icons/react';

export function GenerateQRCode() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <QrCode className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[400px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdlaXUjnY_rli3L1D9T9OmvlJI2VLxLldlA&s"
          className="w-full h-full"
          alt=""
        />

        <div className="flex items-center justify-center flex-col text-center">
          <DialogTitle className="text-2xl">QR Code Gerado</DialogTitle>

          <div className="flex flex-col items-center gap-4">
            <p className="text-md text-gray-400">
              Você pode utilizar o QR Code acima para criar uma nova sala de
              reunião para agendamento rapido.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" className="w-full">
            Compartilhar
          </Button>
          <Button className="w-full">
            Imprimir QR Code
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
