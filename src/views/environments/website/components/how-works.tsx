import { Button } from '@/views/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/views/components/ui/card';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    title: 'Cadastro Rápido',
    description: 'Crie sua conta em menos de 2 minutos com informações básicas',
    icon: '1',
    features: [
      'Dados pessoais básicos',
      'Cadastro de dependentes',
      'Pronto para usar imediatamente',
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Encontre o Pediatra Ideal',
    description: 'Busque por especialidade, localização ou disponibilidade',
    icon: '2',
    features: [
      'Filtros avançados',
      'Perfis completos',
      'Avaliações verificadas',
    ],
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Agendamento Instantâneo',
    description: 'Escolha data e horário com confirmação imediata',
    icon: '3',
    features: [
      'Calendário integrado',
      'Horários em tempo real',
      'Lembretes automáticos',
    ],
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Atendimento de Qualidade',
    description: 'Compareça à consulta ou opte por telemedicina',
    icon: '4',
    features: [
      'Acompanhamento completo',
      'Receitas digitais',
      'Histórico médico online',
    ],
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
];

export function ComoFuncionaSection() {
  return (
    <section id="funcionamento" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Como Funciona o oPediatra
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Agendar consultas pediátricas nunca foi tão simples e rápido
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <Card
              key={step.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Tudo que você precisa em uma única plataforma
            </h3>
            <p className="text-muted-foreground">
              O oPediatra foi desenvolvido para simplificar o acesso a cuidados
              pediátricos de qualidade. Desde o cadastro até o acompanhamento
              pós-consulta, oferecemos uma experiência completa e sem
              complicações.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h4 className="font-semibold flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>Sem burocracia</span>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Processo 100% digital e descomplicado
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h4 className="font-semibold flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>Profissionais verificados</span>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Todos os pediatras são certificados
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="mt-4 bg-blue-600 hover:bg-blue-700"
            >
              <Link to="/cadastro">Comece Agora</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Médica atendendo criança"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
