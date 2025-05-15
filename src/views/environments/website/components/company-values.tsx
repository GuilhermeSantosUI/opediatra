import { cn } from '@/app/utils';
import { Button } from '@/views/components/ui/button';
import { Card, CardContent } from '@/views/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/views/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/views/components/ui/tabs';
import {
  ArrowUpRight,
  Clock,
  Key,
  Lock,
  ShieldCheck,
  Users,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const reservationValues = [
  {
    id: 'efficiency',
    name: 'Eficiência',
    description:
      'Otimizamos o uso dos espaços do SergipeTec através de um sistema ágil que permite reservas rápidas e gestão inteligente dos recursos disponíveis.',
    icon: Clock,
    color: 'text-blue-600',
    principles: [
      'Agendamento rápido em poucos cliques',
      'Visualização em tempo real da disponibilidade',
      'Redução de conflitos e sobreposições',
      'Otimização do uso dos espaços físicos',
    ],
    testimonial: {
      quote:
        'Com o sistema Reserva, conseguimos aumentar em 40% a utilização das nossas salas, eliminando tempo ocioso e conflitos de agendamento.',
      author: 'Carlos Mendes',
      role: 'Coordenador de Infraestrutura',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcmfaDAi-TkIeKTW-BdtJebwQRoEvDPx3UA&s',
    },
    image:
      'https://www.se.gov.br/anexos/uploads/image/image/361371/slide_1c2be5e153db308ab517252b94821d69.jpg',
  },
  {
    id: 'transparency',
    name: 'Transparência',
    description:
      'Todas as reservas são públicas e auditáveis, garantindo equidade no acesso aos espaços do SergipeTec e uso adequado dos recursos compartilhados.',
    icon: ShieldCheck,
    color: 'text-green-600',
    principles: [
      'Registro claro de todas as reservas',
      'Critérios públicos para priorização',
      'Relatórios de utilização disponíveis',
      'Sistema aberto para consulta',
    ],
    testimonial: {
      quote:
        'A transparência do sistema eliminou conflitos sobre quem tinha direito de uso das salas. Agora todos podem ver a agenda pública.',
      author: 'Ana Paula Silva',
      role: 'Gestora Administrativa',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400',
    },
    image:
      'https://www.se.gov.br/anexos/uploads/image/image/365710/97ee5ff6e389109cf705db97d596f281.jpg',
  },
  {
    id: 'accessibility',
    name: 'Acessibilidade',
    description:
      'Garantimos que todos os colaboradores e parceiros do SergipeTec tenham acesso igualitário aos espaços, com um sistema intuitivo e inclusivo.',
    icon: Key,
    color: 'text-purple-600',
    principles: [
      'Interface simples e intuitiva',
      'Acesso via múltiplos dispositivos',
      'Suporte para diferentes níveis de acesso',
      'Sistema disponível 24/7',
    ],
    testimonial: {
      quote:
        'Mesmo não sendo expert em tecnologia, consegui fazer minha primeira reserva em menos de 2 minutos. O sistema é muito fácil de usar!',
      author: 'Roberto Almeida',
      role: 'Pesquisador Associado',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    },
    image:
      'https://www.se.gov.br/anexos/uploads/image/image/359971/39053b63c919befad6102580172261be.jpeg',
  },
  {
    id: 'seguranca',
    name: 'Segurança',
    description:
      'Protegemos os dados e garantimos a integridade do sistema, com controles de acesso robustos e registro seguro de todas as transações.',
    icon: Lock,
    color: 'text-red-600',
    principles: [
      'Autenticação segura de usuários',
      'Registro imutável de reservas',
      'Proteção de dados pessoais',
      'Backup automático das informações',
    ],
    testimonial: {
      quote:
        'Depois que implementamos o sistema Reserva, eliminamos completamente os problemas com reservas não autorizadas ou conflitos de uso.',
      author: 'Fernanda Costa',
      role: 'Coordenadora de TI',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    },
    image:
      'https://sergipetec.org.br/wp-content/uploads/2025/01/SERGIPETEC-BIO.jpg',
  },
  {
    id: 'collaboration',
    name: 'Colaboração',
    description:
      'Promovemos o compartilhamento inteligente dos espaços, facilitando o trabalho em equipe e o uso coletivo dos recursos do SergipeTec.',
    icon: Users,
    color: 'text-indigo-600',
    principles: [
      'Sistema de reservas compartilhadas',
      'Notificações para equipes',
      'Integração com calendários corporativos',
      'Espaços para trabalho colaborativo',
    ],
    testimonial: {
      quote:
        'O sistema nos ajudou a organizar melhor nossas reuniões interdepartamentais. Agora é fácil encontrar salas e horários que atendam a todos.',
      author: 'Ricardo Oliveira',
      role: 'Líder de Projetos',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
    },
    image:
      'https://static.wixstatic.com/media/35c37d_3d29985aca904de6989546fa7c8c74b1~mv2.jpg/v1/fill/w_1800,h_760,al_c,q_85,enc_avif,quality_auto/35c37d_3d29985aca904de6989546fa7c8c74b1~mv2.jpg',
  },
];

export function AboutSectionCompanyValues() {
  const [activeValue, setActiveValue] = useState<string>(
    reservationValues[0].id
  );

  const currentValue =
    reservationValues.find((value) => value.id === activeValue) ||
    reservationValues[0];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <div className="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm">
            Nossos Princípios
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            O que guia o sistema Reserva
          </h2>
          <p className="text-muted-foreground">
            Valores fundamentais que garantem uma experiência justa, eficiente e
            transparente no agendamento dos espaços do SergipeTec.
          </p>
        </div>

        <Tabs
          value={activeValue}
          onValueChange={setActiveValue}
          className="space-y-8"
        >
          <div className="mb-8 flex justify-center">
            <div className="w-full md:hidden">
              <Select value={activeValue} onValueChange={setActiveValue}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um princípio" />
                </SelectTrigger>
                <SelectContent>
                  {reservationValues.map((value) => (
                    <SelectItem key={value.id} value={value.id}>
                      <div className="flex items-center gap-2">
                        <value.icon
                          className={cn('h-4 w-4', value.color)}
                          weight="bold"
                        />
                        <span>{value.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <TabsList className="hidden h-auto bg-transparent p-1 md:flex">
              {reservationValues.map((value) => (
                <TabsTrigger
                  key={value.id}
                  value={value.id}
                  className={cn(
                    'data-[state=active]:bg-muted gap-2',
                    'data-[state=active]:border-border border border-transparent'
                  )}
                >
                  <value.icon
                    className={cn('h-4 w-4', value.color)}
                    weight="bold"
                  />
                  <span>{value.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="space-y-6 md:col-span-6">
              <div className="mb-4 flex items-center gap-4">
                <div className={cn('rounded-xl p-2.5', 'bg-muted')}>
                  <currentValue.icon
                    className={cn('h-7 w-7', currentValue.color)}
                    weight="bold"
                  />
                </div>
                <h3 className="text-2xl font-bold">{currentValue.name}</h3>
              </div>

              <p className="text-muted-foreground text-lg">
                {currentValue.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-medium">Como aplicamos:</h4>
                <ul className="space-y-2">
                  {currentValue.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowUpRight
                        className={cn('mt-0.5 h-5 w-5', currentValue.color)}
                        weight="bold"
                      />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentValue.testimonial && (
                <Card className="bg-muted/30 mt-6 p-0">
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                        <img
                          src={currentValue.testimonial.image}
                          alt={currentValue.testimonial.author}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {currentValue.testimonial.author}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {currentValue.testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      &quot;{currentValue.testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="md:col-span-6">
              {currentValue.image ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={currentValue.image}
                    alt={`Ilustração do princípio ${currentValue.name}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <div
                      className={cn(
                        'inline-block rounded-lg px-3 py-1 text-sm text-white',
                        'bg-black/30 backdrop-blur-sm'
                      )}
                    >
                      {currentValue.name}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-muted flex aspect-[4/3] items-center justify-center rounded-xl">
                  <currentValue.icon
                    className={cn(
                      'h-24 w-24',
                      currentValue.color,
                      'opacity-25'
                    )}
                    weight="bold"
                  />
                </div>
              )}
            </div>
          </div>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            Esses princípios garantem que o sistema Reserva atenda às
            necessidades de todos os usuários do SergipeTec. Quer fazer sua
            primeira reserva?
          </p>
          <Button asChild size="lg">
            <Link to="/reservar">Reservar Agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
