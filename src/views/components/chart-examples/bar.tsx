'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/views/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/views/components/ui/chart';

const chartData = [
  { mes: 'Janeiro', completadas: 120, pendentes: 30 },
  { mes: 'Fevereiro', completadas: 150, pendentes: 45 },
  { mes: 'Março', completadas: 170, pendentes: 20 },
  { mes: 'Abril', completadas: 200, pendentes: 25 },
  { mes: 'Maio', completadas: 220, pendentes: 15 },
  { mes: 'Junho', completadas: 250, pendentes: 10 },
];

const chartConfig = {
  completadas: {
    label: 'Completadas',
    color: '#0D295D',
  },
  pendentes: {
    label: 'Pendentes',
    color: '#FEC52A',
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  return (
    <Card className="opacity-60">
      <CardHeader>
        <CardTitle>Gráfico de Barras - Gerenciamento de Tarefas</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="mes"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="completadas"
              fill="var(--color-completadas)"
              radius={4}
            />
            <Bar dataKey="pendentes" fill="var(--color-pendentes)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Aumento de 5.2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando o status de conclusão de tarefas dos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
