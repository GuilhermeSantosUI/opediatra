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
  { mes: 'Janeiro', tarefasUrgentes: 30 },
  { mes: 'Fevereiro', tarefasUrgentes: 45 },
  { mes: 'Março', tarefasUrgentes: 60 },
  { mes: 'Abril', tarefasUrgentes: 50 },
  { mes: 'Maio', tarefasUrgentes: 70 },
  { mes: 'Junho', tarefasUrgentes: 55 },
];

const chartConfig = {
  tarefasUrgentes: {
    label: 'Urgentes',
    color: '#FF0000', // Red color to indicate urgency
  },
} satisfies ChartConfig;

export function SingleBarComponent() {
  return (
    <Card className="opacity-60">
      <CardHeader>
        <CardTitle>Gráfico de Tarefas Urgentes</CardTitle>
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="tarefasUrgentes"
              fill="var(--color-tarefasUrgentes)"
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Aumento de 5.2% nas tarefas urgentes este mês{' '}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando o total de tarefas urgentes dos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
