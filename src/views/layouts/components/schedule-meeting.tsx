import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useDisclosure } from '@/app/context/use-disclosure';
import { Button } from '@/views/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/views/components/ui/form';
import { Input } from '@/views/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/views/components/ui/select';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/views/components/ui/sheet';
import { SingleDayPicker } from '@/views/components/ui/single-day-picker';
import { Textarea } from '@/views/components/ui/textarea';
import { TimeInput } from '@/views/components/ui/time-input';
import type { TimeValue } from 'react-aria-components';
import { rooms } from '../../environments/views/events/components/mock';

const reservationSchema = z.object({
  room: z.string().min(1, 'Sala é obrigatória'),
  purpose: z.string().min(1, 'Finalidade é obrigatória'),
  responsible: z.string().min(1, 'Responsável é obrigatório'),
  startDate: z.date({
    required_error: 'Data de início é obrigatória',
  }),
  startTime: z.object(
    {
      hour: z.number(),
      minute: z.number(),
    },
    {
      required_error: 'Horário de início é obrigatório',
    }
  ),
  endDate: z.date({
    required_error: 'Data de término é obrigatória',
  }),
  endTime: z.object(
    {
      hour: z.number(),
      minute: z.number(),
    },
    {
      required_error: 'Horário de término é obrigatório',
    }
  ),
  participants: z.number().min(1, 'Número de participantes é obrigatório'),
  additionalInfo: z.string().optional(),
});

export type TReservationFormData = z.infer<typeof reservationSchema>;

interface IProps {
  room?: string;
  startDate?: Date;
  startTime?: { hour: number; minute: number };
}

export function ScheduleMeeting({ room, startDate, startTime }: IProps) {
  const { isOpen, onClose, onToggle } = useDisclosure();

  const form = useForm<TReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      room: room || '',
      purpose: '',
      responsible: '',
      startDate: startDate || undefined,
      startTime: startTime || undefined,
      participants: 1,
      additionalInfo: '',
    },
  });

  function onSubmit(data: TReservationFormData) {
    console.log('Dados da reserva:', data);
    onClose();
    form.reset();
  }

  return (
    <Sheet open={isOpen} onOpenChange={onToggle}>
      <SheetTrigger asChild>
        <Button>Reservar Sala</Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg overflow-y-auto rounded-s-xl">
        <SheetHeader>
          <SheetTitle>Reservar Sala</SheetTitle>
          <SheetDescription>
            Preencha os dados para reservar uma sala. Verifique a
            disponibilidade antes de confirmar.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            id="reservation-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="room"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Sala</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={!!room}
                    >
                      <SelectTrigger data-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Selecione uma sala" />
                      </SelectTrigger>
                      <SelectContent>
                        {rooms.map((room) => (
                          <SelectItem key={room.image} value={room.image}>
                            {room.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="purpose"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Finalidade</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Reunião de equipe, Palestra, Treinamento"
                      data-invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="responsible"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Responsável</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome do responsável pela reserva"
                      data-invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Data de início</FormLabel>
                    <FormControl>
                      <SingleDayPicker
                        value={field.value}
                        onSelect={(date) => field.onChange(date as Date)}
                        placeholder="Selecione a data"
                        data-invalid={fieldState.invalid}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startTime"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Horário de início</FormLabel>
                    <FormControl>
                      <TimeInput
                        value={field.value as TimeValue}
                        onChange={field.onChange}
                        hourCycle={24}
                        data-invalid={fieldState.invalid}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="endDate"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Data de término</FormLabel>
                    <FormControl>
                      <SingleDayPicker
                        value={field.value}
                        onSelect={(date) => field.onChange(date as Date)}
                        placeholder="Selecione a data"
                        data-invalid={fieldState.invalid}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endTime"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Horário de término</FormLabel>
                    <FormControl>
                      <TimeInput
                        value={field.value as TimeValue}
                        onChange={field.onChange}
                        hourCycle={24}
                        data-invalid={fieldState.invalid}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="participants"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Número de participantes</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="Quantidade de pessoas"
                      data-invalid={fieldState.invalid}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Informações adicionais</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Equipamentos necessários, configuração especial, etc."
                      data-invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </SheetClose>
          <Button form="reservation-form" type="submit">
            Confirmar Reserva
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
