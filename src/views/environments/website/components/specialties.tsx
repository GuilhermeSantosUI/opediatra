import { Badge } from '@/views/components/ui/badge';
import { Button } from '@/views/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/views/components/ui/card';
import { AlignLeft, Baby, Bone, Brain, HeartPulse, LucideAngry, Microscope, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const especialidades = [
  {
    id: 1,
    nome: 'Pediatria Geral',
    icon: Stethoscope,
    descricao: 'Acompanhamento do crescimento e desenvolvimento infantil',
    cor: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    subespecialidades: ['Puericultura', 'Aleitamento materno', 'Vacinação'],
  },
  {
    id: 2,
    nome: 'Cardiologia Pediátrica',
    icon: HeartPulse,
    descricao:
      'Diagnóstico e tratamento de cardiopatias congênitas e adquiridas',
    cor: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-900/20',
    subespecialidades: [
      'Ecocardiografia',
      'Arritmias',
      'Cardiopatias congênitas',
    ],
  },
  {
    id: 3,
    nome: 'Neurologia Infantil',
    icon: Brain,
    descricao:
      'Cuidados com desenvolvimento neurológico e distúrbios associados',
    cor: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    subespecialidades: ['Epilepsia', 'Autismo', 'Atraso neuropsicomotor'],
  },
  {
    id: 4,
    nome: 'Alergia e Imunologia',
    icon: AlignLeft,
    descricao:
      'Tratamento de alergias alimentares, respiratórias e dermatológicas',
    cor: 'text-green-600',
    bg: 'bg-green-50 dark:bg-green-900/20',
    subespecialidades: ['Alergia alimentar', 'Asma', 'Dermatite atópica'],
  },
  {
    id: 5,
    nome: 'Infectologia Pediátrica',
    icon: Microscope,
    descricao: 'Diagnóstico e tratamento de doenças infecciosas na infância',
    cor: 'text-yellow-600',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    subespecialidades: [
      'Doenças virais',
      'Infecções bacterianas',
      'Parasitoses',
    ],
  },
  {
    id: 6,
    nome: 'Ortopedia Pediátrica',
    icon: Bone,
    descricao: 'Cuidados com o sistema musculoesquelético em desenvolvimento',
    cor: 'text-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    subespecialidades: [
      'Deformidades congênitas',
      'Escoliose',
      'Traumatologia',
    ],
  },
  {
    id: 7,
    nome: 'Pneumologia Infantil',
    icon: LucideAngry,
    descricao: 'Tratamento de doenças respiratórias na infância',
    cor: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    subespecialidades: ['Bronquite', 'Fibrose cística', 'Apneia do sono'],
  },
  {
    id: 8,
    nome: 'Neonatologia',
    icon: Baby,
    descricao: 'Cuidados especializados para recém-nascidos e prematuros',
    cor: 'text-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    subespecialidades: ['Prematuridade', 'Icterícia neonatal', 'Aleitamento'],
  },
];

export function EspecialidadesSection() {
  return (
    <section id="especialidades" className="py-20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nossas Especialidades Pediátricas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado especializado para cada necessidade da saúde infantil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {especialidades.map((especialidade) => (
            <Card
              key={especialidade.id}
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
            >
              <CardHeader className="pb-3">
                <div
                  className={`${especialidade.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <especialidade.icon
                    className={`w-6 h-6 ${especialidade.cor}`}
                  />
                </div>
                <CardTitle>{especialidade.nome}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {especialidade.descricao}
                </p>
                <div className="flex flex-wrap gap-2">
                  {especialidade.subespecialidades.map((sub, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {sub}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Não encontrou a especialidade que precisa?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe pode ajudar a indicar o profissional ideal para o
                cuidado do seu filho. Entre em contato ou agende uma consulta
                com nossa pediatria geral para orientação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contato">Falar com Atendimento</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/pediatras">Ver Todos os Pediatras</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Médica atendendo criança"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/0 dark:from-gray-900/80 dark:to-gray-900/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
