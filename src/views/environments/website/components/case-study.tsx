import { Badge } from '@/views/components/ui/badge';
import { Button } from '@/views/components/ui/button';
import { Card } from '@/views/components/ui/card';
import {
  ArrowRight,
  ArrowUpRight,
  ChartLineUp,
  CheckCircle,
  Heartbeat,
  Play,
  Quotes,
  Target,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function CaseStudy() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary">
                Estudo de Caso
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Como o Saúde+ transformou <br /> a gestão de UBS com o Reserva
              </h2>
              <div className="flex items-center gap-3 text-muted-foreground">
                <img
                  alt="Dr. Carlos Silva"
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  className="rounded-full"
                  src="https://img.freepik.com/free-photo/bearded-doctor-glasses_23-2147896187.jpg"
                  style={{ color: 'transparent' }}
                />
                <div className="text-sm">
                  <p className="font-medium text-foreground">
                    Dr. Carlos Silva
                  </p>
                  <p>Coordenador de Saúde Municipal</p>
                </div>
              </div>
              <p className="text-muted-foreground md:text-lg">
                Conheça como o sistema Saúde+ revolucionou a gestão das Unidades
                Básicas de Saúde, melhorando o atendimento ao cidadão e
                otimizando os processos internos.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Target className="h-5 w-5 text-primary" weight="bold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">O Desafio</h3>
                  <p className="text-muted-foreground">
                    Gestão manual de agendamentos, prontuários em papel, falta
                    de transparência no estoque de medicamentos e dificuldade no
                    acompanhamento pelos pacientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckCircle className="h-5 w-5 text-primary" weight="bold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">A Solução</h3>
                  <p className="text-muted-foreground">
                    Implementação do Saúde+ com aplicativo para pacientes e
                    sistema web para profissionais, integrando agendamentos,
                    prontuário eletrônico e gestão de farmácia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <ChartLineUp className="h-5 w-5 text-primary" weight="bold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Os Resultados</h3>
                  <p className="text-muted-foreground">
                    80% de redução no tempo de agendamento, 60% menos faltas em
                    consultas, e controle em tempo real do estoque de
                    medicamentos.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 border-l-4 border-primary/20 pl-6 italic text-muted-foreground">
              <Quotes
                className="absolute -left-3 -top-2 h-6 w-6 rounded-full bg-background text-primary"
                weight="fill"
              />
              <p className="md:text-lg">
                "O Saúde+ transformou nossa relação com os pacientes. Agora eles
                podem agendar consultas a qualquer momento e temos todas as
                informações de saúde centralizadas digitalmente."
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button>
                Ver Estudo Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Agendar Demonstração
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border">
              <img
                alt="Profissionais de saúde utilizando o sistema Saúde+"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full"
                src="https://www.aracaju.se.gov.br/userfiles/noticia_imagens/202310/102366/foto_usf.jpg"
                style={{ color: 'transparent' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border-2 border-white bg-white/20 p-2 backdrop-blur-sm transition-transform hover:scale-110">
                  <Play className="h-10 w-10 text-white" weight="fill" />
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">80%</div>
                <p className="text-sm text-muted-foreground">
                  Redução no tempo de agendamento
                </p>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">60%</div>
                <p className="text-sm text-muted-foreground">
                  Menos faltas em consultas e exames
                </p>
              </Card>
            </div>
            <Card className="mt-6 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link to="/" className="flex items-center space-x-2">
                    <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Heartbeat
                        className="size-6 text-secondary"
                        weight="duotone"
                      />
                    </div>
                  </Link>
                  <div className="grid flex-1 text-left text-xs">
                    <span className="truncate text-lg font-semibold">
                      Saúde+
                    </span>
                    <span className="truncate">Gestão inteligente.</span>
                  </div>
                </div>
                <Badge variant="secondary">Saúde Pública</Badge>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                <span className="font-medium">Setor:</span> Saúde
                <span className="mx-2">•</span>
                <span className="font-medium">Unidades:</span> 15+
                <span className="mx-2">•</span>
                <span className="font-medium">Município:</span> São Paulo
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
