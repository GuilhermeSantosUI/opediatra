import {
  AreaChart,
  Globe,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
} from 'lucide-react';
import React from 'react';

export type CompanyValue = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  principles: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  image?: string;
};

export const companyValues: CompanyValue[] = [
  {
    id: 'accessibility',
    name: 'Acessibilidade',
    description:
      'Promovemos o acesso universal e facilitado aos serviços de saúde, eliminando barreiras físicas, digitais e sociais para garantir cuidado igualitário a todos.',
    icon: Globe,
    color: 'text-green-600',
    principles: [
      'Eliminar barreiras geográficas e digitais no acesso à saúde',
      'Simplificar processos de agendamento e atendimento',
      'Garantir inclusão de populações vulneráveis',
      'Promover equidade na atenção primária',
    ],
    testimonial: {
      quote:
        'O Reserva nos permitiu alcançar comunidades antes invisíveis ao sistema. Agora, qualquer cidadão pode acessar atendimento com poucos cliques, de onde estiver.',
      author: 'Ana Carla Souza',
      role: 'Coordenadora da UBS Nova Esperança',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVDOKuGXs1abKCK9ckfY4LeLVN0_GPcWToBTJEObp1pYcYIaKm1kHqhJBlJ3RpX-jRK4&usqp=CAU',
    },
    image:
      'https://gestaodaclinica.com.br/wp-content/uploads/2024/07/front-view-female-doctors-patient-1024x683.jpg',
  },
  {
    id: 'prevention',
    name: 'Prevenção',
    description:
      'Incentivamos práticas preventivas e educação em saúde para evitar agravos e melhorar a qualidade de vida da população.',
    icon: ShieldCheck,
    color: 'text-blue-600',
    principles: [
      'Foco em prevenção e promoção de saúde',
      'Educação contínua da população',
      'Monitoramento proativo de pacientes crônicos',
      'Redução de demandas emergenciais via acompanhamento',
    ],
    testimonial: {
      quote:
        'Através do monitoramento ativo feito pelo Reserva, conseguimos evitar complicações em dezenas de pacientes com hipertensão. Prevenção virou prioridade.',
      author: 'Carlos Mendes',
      role: 'Agente Comunitário de Saúde',
      image:
        'https://images.unsplash.com/photo-1588776814392-15c5f3dd0153?q=80&w=400',
    },
    image:
      'https://i0.wp.com/sanarmed.com/wp-content/uploads/2024/06/medico-aferindo-pressao-paciente.webp?fit=1000%2C750&ssl=1',
  },
  {
    id: 'humanized-care',
    name: 'Cuidado Humanizado',
    description:
      'Colocamos as pessoas no centro do cuidado, com escuta ativa, empatia e acolhimento em todos os pontos da jornada do paciente.',
    icon: Heart,
    color: 'text-red-500',
    principles: [
      'Valorizar escuta e vínculo com o paciente',
      'Reduzir burocracias para foco no cuidado',
      'Oferecer suporte humanizado mesmo via tecnologia',
      'Respeitar diversidade e individualidade no atendimento',
    ],
    testimonial: {
      quote:
        'O sistema nos ajudou a ver além dos dados. Hoje entendemos melhor o contexto de vida de cada paciente e acolhemos com mais empatia.',
      author: 'Letícia Ribeiro',
      role: 'Enfermeira da ESF Jardim Progresso',
      image:
        'https://images.unsplash.com/photo-1622555254514-9f87caa82f6c?q=80&w=400',
    },
    image:
      'https://blog.estacio.br/wp-content/uploads/2021/01/O-que-voc%C3%AA-precisa-saber-sobre-Medicina-humanizada.jpeg',
  },
  {
    id: 'data-efficiency',
    name: 'Eficiência com Dados',
    description:
      'Utilizamos tecnologia e dados para otimizar recursos, evitar desperdícios e tornar o atendimento mais ágil, assertivo e integrado.',
    icon: AreaChart,
    color: 'text-emerald-600',
    principles: [
      'Uso de dados para gestão inteligente',
      'Evitar desperdício de medicamentos e consultas',
      'Automatizar processos repetitivos',
      'Garantir decisões baseadas em evidências',
    ],
    testimonial: {
      quote:
        'Antes era tudo no papel. Hoje temos controle de estoque, filas, agendamentos e dados epidemiológicos em tempo real.',
      author: 'José Lima',
      role: 'Gestor Municipal de Saúde',
      image:
        'https://images.unsplash.com/photo-1627338360081-68005295ba1c?q=80&w=400',
    },
    image:
      'https://s2.glbimg.com/W_seLnrgqvUllGYi64YcP0Vr26w=/e.glbimg.com/og/ed/f/original/2018/11/09/gettyimages-864573868.jpg',
  },
  {
    id: 'public-ethics',
    name: 'Ética e Transparência',
    description:
      'Nos comprometemos com uma gestão pública ética, transparente e orientada ao bem comum, prestando contas com clareza e responsabilidade.',
    icon: Lightbulb,
    color: 'text-amber-600',
    principles: [
      'Transparência no uso de recursos públicos',
      'Relatórios acessíveis à população',
      'Decisões participativas e auditáveis',
      'Acesso público aos indicadores de saúde',
    ],
    testimonial: {
      quote:
        'Os relatórios gerados pelo sistema facilitaram até audiências públicas. A transparência virou parte do nosso cotidiano.',
      author: 'Juliana Castro',
      role: 'Secretária de Saúde Municipal',
      image:
        'https://images.unsplash.com/photo-1612349317150-d332b7d14c6e?q=80&w=400',
    },
    image:
      'https://conclinica.com.br/wp-content/uploads/2023/11/codigo-de-etica-medica.jpg',
  },
  {
    id: 'community-impact',
    name: 'Impacto Comunitário',
    description:
      'Acreditamos na força das comunidades e construímos soluções junto a quem vive os desafios da saúde pública no dia a dia.',
    icon: Users,
    color: 'text-indigo-600',
    principles: [
      'Co-criação com agentes e moradores locais',
      'Adaptação às realidades específicas de cada território',
      'Apoio a ações de base comunitária',
      'Valorização do saber popular em saúde',
    ],
    testimonial: {
      quote:
        'O sucesso do Reserva vem do território. Escutamos os usuários, os agentes, os gestores. A tecnologia nasceu do chão da comunidade.',
      author: 'Renato Silva',
      role: 'Coordenador de Inovação Social',
      image:
        'https://images.unsplash.com/photo-1542849180-0773e98b78dd?q=80&w=400',
    },
    image:
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800',
  },
];
