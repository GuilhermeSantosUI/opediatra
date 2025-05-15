import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/views/components/ui/avatar';
import { Badge } from '@/views/components/ui/badge';
import { Button } from '@/views/components/ui/button';
import { Card, CardContent, CardFooter } from '@/views/components/ui/card';
import { Award, HeartPulse, Languages, Star, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const pediatras = [
  {
    id: 1,
    nome: 'Dra. Ana Beatriz Silva',
    especialidade: 'Pediatria Geral',
    experiencia: '12 anos',
    avaliacao: 4.9,
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    formacao: 'USP - Universidade de São Paulo',
    certificacoes: [
      'Título de Especialista em Pediatria',
      'PALS - Suporte Avançado de Vida em Pediatria',
    ],
    idiomas: ['Português', 'Inglês', 'Espanhol'],
    bio: 'Pediatra dedicada ao cuidado integral da criança e do adolescente, com experiência em ambulatório e emergência pediátrica.',
  },
  {
    id: 2,
    nome: 'Dr. Carlos Eduardo Mendes',
    especialidade: 'Neonatologia',
    experiencia: '15 anos',
    avaliacao: 4.8,
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    formacao: 'UNIFESP - Universidade Federal de São Paulo',
    certificacoes: ['Neonatologia pela SBP', 'Reanimação Neonatal'],
    idiomas: ['Português', 'Francês'],
    bio: 'Especialista em cuidados com recém-nascidos, prematuros e acompanhamento do desenvolvimento nos primeiros anos de vida.',
  },
  {
    id: 3,
    nome: 'Dra. Fernanda Costa Oliveira',
    especialidade: 'Alergia e Imunologia Pediátrica',
    experiencia: '10 anos',
    avaliacao: 4.9,
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    formacao: 'UFMG - Universidade Federal de Minas Gerais',
    certificacoes: ['Especialista em Alergia e Imunologia', 'Membro da ASBAI'],
    idiomas: ['Português', 'Inglês'],
    bio: 'Atua no diagnóstico e tratamento de alergias alimentares, respiratórias e dermatites atópicas em crianças e adolescentes.',
  },
  {
    id: 4,
    nome: 'Dr. Rafael Gonçalves Santos',
    especialidade: 'Cardiologia Pediátrica',
    experiencia: '8 anos',
    avaliacao: 4.7,
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    formacao: 'UFRJ - Universidade Federal do Rio de Janeiro',
    certificacoes: ['Cardiologia Pediátrica pela SBC', 'Ecocardiografia Fetal'],
    idiomas: ['Português', 'Inglês'],
    bio: 'Especializado em cardiopatias congênitas e adquiridas na infância, com enfoque em diagnóstico precoce e tratamento.',
  },
];

export function NossosPediatrasSection() {
  return (
    <section id="pediatras" className="py-20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Conheça Nossos Pediatras
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais qualificados e dedicados ao cuidado integral da saúde
            infantil
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pediatras.map((pediatra) => (
            <Card
              key={pediatra.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage
                      src={pediatra.img}
                      alt={pediatra.nome}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {pediatra.nome
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-semibold">{pediatra.nome}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pediatra.especialidade}
                  </p>

                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">
                      {pediatra.avaliacao}{' '}
                      <span className="text-muted-foreground">
                        ({pediatra.experiencia})
                      </span>
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Award className="w-3 h-3" />
                      <span>{pediatra.certificacoes[0].split(' ')[0]}</span>
                    </Badge>
                    {pediatra.idiomas.length > 1 && (
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Languages className="w-3 h-3" />
                        <span>{pediatra.idiomas.length} idiomas</span>
                      </Badge>
                    )}
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                    {pediatra.bio}
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex justify-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/pediatras/${pediatra.id}`}>
                    <Stethoscope className="mr-2 h-4 w-4" />
                    Ver Perfil Completo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/pediatras">
              Ver Todos os Pediatras
              <HeartPulse className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
