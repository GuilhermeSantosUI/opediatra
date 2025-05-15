'use client';

import { Bar, BarChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
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
  { date: '2024-07-15', urgent: 5, planned: 10 },
  { date: '2024-07-16', urgent: 8, planned: 12 },
  { date: '2024-07-17', urgent: 6, planned: 15 },
  { date: '2024-07-18', urgent: 10, planned: 10 },
  { date: '2024-07-19', urgent: 12, planned: 8 },
  { date: '2024-07-20', urgent: 7, planned: 14 },
  { date: '2024-07-21', urgent: 9, planned: 11 },
  { date: '2024-07-22', urgent: 11, planned: 9 },
  { date: '2024-07-23', urgent: 4, planned: 13 },
  { date: '2024-07-24', urgent: 10, planned: 12 },
  { date: '2024-07-25', urgent: 8, planned: 10 },
  { date: '2024-07-26', urgent: 6, planned: 14 },
];

const chartConfig = {
  urgent: {
    label: 'Tarefas Urgentes',
    color: 'hsl(var(--chart-1))',
  },
  planned: {
    label: 'Tarefas Planejadas',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

function calculateImpact() {
  const totalUrgent = chartData.reduce((acc, item) => acc + item.urgent, 0);
  const totalPlanned = chartData.reduce((acc, item) => acc + item.planned, 0);
  const impactPercentage = (
    (totalUrgent / (totalUrgent + totalPlanned)) *
    100
  ).toFixed(2);
  return impactPercentage;
}

function getImpactLevel(impactPercentage: number) {
  if (impactPercentage < 20) {
    return 'baixo';
  } else if (impactPercentage < 50) {
    return 'moderado';
  } else {
    return 'alto';
  }
}

export function ChartUrgentVsPlannedComponent() {
  const impact = calculateImpact();
  const impactLevel = getImpactLevel(parseFloat(impact));
  return (
    <Card className="h-fit opacity-60">
      <CardHeader>
        <CardTitle>Impacto de Tarefas Urgentes vs Planejadas</CardTitle>
        <CardDescription>
          Comparação entre tarefas urgentes e planejadas na sprint. O impacto
          das tarefas urgentes foi de {impact}%, considerado {impactLevel}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full max-h-[292px]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('pt-BR', {
                  weekday: 'short',
                });
              }}
            />
            <Bar
              dataKey="urgent"
              stackId="a"
              fill="var(--color-urgent)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="planned"
              stackId="a"
              fill="var(--color-planned)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    });
                  }}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
