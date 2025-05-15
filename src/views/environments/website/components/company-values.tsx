import { cn } from '@/app/utils';
import { Button } from '@/views/components/ui/button';
import { Card, CardContent } from '@/views/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/views/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/views/components/ui/tabs';
import { ArrowUpRight, Clock, Heartbeat, ShieldCheck, Stethoscope, UserCirclePlus } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const pediatricValues = [
  {
    id: 'efficiency',
    name: 'Agilidade',
    description:
      'Oferecemos um sistema rápido e intuitivo para agendamento de consultas pediátricas, garantindo que seu filho receba atendimento no momento certo.',
    icon: Clock,
    color: 'text-blue-600',
    principles: [
      'Agendamento em poucos cliques',
      'Disponibilidade em tempo real',
      'Redução de tempo de espera',
      'Lembretes automáticos por SMS/email',
    ],
    testimonial: {
      quote:
        'Com o oPediatra, consegui marcar uma consulta urgente para minha filha em menos de 2 minutos, sem precisar ficar horas no telefone.',
      author: 'Mariana Santos',
      role: 'Mãe da pequena Laura',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400',
    },
    image:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'transparency',
    name: 'Transparência',
    description:
      'Todas as informações sobre consultas, especialistas e valores são claramente apresentadas, sem surpresas ou custos ocultos.',
    icon: ShieldCheck,
    color: 'text-green-600',
    principles: [
      'Valores explícitos antes do agendamento',
      'Histórico completo de consultas',
      'Perfil detalhado dos pediatras',
      'Políticas claras de cancelamento',
    ],
    testimonial: {
      quote:
        'Adoro saber exatamente quanto vou pagar antes de marcar a consulta e poder ver todo o histórico médico do meu filho em um só lugar.',
      author: 'Carlos Eduardo',
      role: 'Pai do João Miguel',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    },
    image:
      'https://images.unsplash.com/photo-1629909613657-27f26a6148e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'accessibility',
    name: 'Acessibilidade',
    description:
      'Garantimos que todas as famílias tenham acesso fácil a pediatras qualificados, com opções para diferentes necessidades.',
    icon: UserCirclePlus,
    color: 'text-purple-600',
    principles: [
      'Interface simples e intuitiva',
      'Acesso via celular ou computador',
      'Suporte para necessidades especiais',
      'Disponível 24 horas por dia',
    ],
    testimonial: {
      quote:
        'Mesmo sendo avó e não entendendo muito de tecnologia, consigo marcar consultas para meus netos sem dificuldade.',
      author: 'Dona Maria',
      role: 'Avó do Pedro e Sofia',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    },
    image:
      'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
  },
  {
    id: 'seguranca',
    name: 'Segurança',
    description:
      'Protegemos todos os dados médicos das crianças com os mais altos padrões de segurança e confidencialidade.',
    icon: Heartbeat,
    color: 'text-red-600',
    principles: [
      'Prontuários eletrônicos seguros',
      'Proteção de dados pessoais',
      'Acesso restrito a profissionais',
      'Conformidade com leis de proteção',
    ],
    testimonial: {
      quote:
        'Como médica, valorizo muito a segurança dos dados dos meus pacientes. O oPediatra oferece total confiabilidade.',
      author: 'Dra. Fernanda Costa',
      role: 'Pediatra',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400',
    },
    image:
      'https://images.unsplash.com/photo-1579165466740-5041e3175b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'specialization',
    name: 'Especialização',
    description:
      'Conectamos você apenas com pediatras qualificados e especialistas em diversas áreas da saúde infantil.',
    icon: Stethoscope,
    color: 'text-indigo-600',
    principles: [
      'Pediatras certificados',
      'Diversas especialidades disponíveis',
      'Avaliações verificadas',
      'Filtros por área de atuação',
    ],
    testimonial: {
      quote:
        'Encontrei uma alergista infantil excelente para meu filho através do oPediatra, algo que estava procurando há meses.',
      author: 'Ricardo Oliveira',
      role: 'Pai do pequeno Davi',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
    },
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

export function AboutSectionCompanyValues() {
  const [activeValue, setActiveValue] = useState<string>(pediatricValues[0].id);

  const currentValue =
    pediatricValues.find((value) => value.id === activeValue) ||
    pediatricValues[0];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <div className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 inline-block rounded-lg px-3 py-1 text-sm">
            Nossos Diferenciais
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Cuidado pediátrico com excelência
          </h2>
          <p className="text-muted-foreground">
            Valores que garantem atendimento de qualidade, segurança e
            comodidade para sua família.
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
                  <SelectValue placeholder="Selecione um diferencial" />
                </SelectTrigger>
                <SelectContent>
                  {pediatricValues.map((value) => (
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
              {pediatricValues.map((value) => (
                <TabsTrigger
                  key={value.id}
                  value={value.id}
                  className={cn(
                    'data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600 dark:data-[state=active]:bg-blue-900/50 dark:data-[state=active]:text-blue-200 gap-2',
                    'data-[state=active]:border-blue-200 dark:data-[state=active]:border-blue-800 border border-transparent'
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
                <div
                  className={cn(
                    'rounded-xl p-2.5',
                    'bg-blue-100 dark:bg-blue-900/50'
                  )}
                >
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
                <Card className="bg-blue-100/30 dark:bg-blue-900/20 mt-6 p-0">
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
                    alt={`Ilustração do diferencial ${currentValue.name}`}
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
            Esses diferenciais garantem que seu filho receba o melhor
            atendimento pediátrico. Pronto para agendar sua primeira consulta?
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/agendar">Agendar Consulta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
