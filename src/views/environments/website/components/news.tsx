import { Badge } from '@/views/components/ui/badge';
import { Button } from '@/views/components/ui/button';
import { Card, CardContent, CardFooter } from '@/views/components/ui/card';
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { TouchEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Como o Reserva Está Transformando a Atenção Básica',
    category: 'Inovação',
    date: 'Abril 18, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1588776814546-ec7ee5b53a16?auto=format&fit=crop&w=2070&q=80',
    excerpt:
      'Soluções digitais do Reserva estão otimizando o atendimento nas UBSs e facilitando a gestão pública. Entenda o impacto direto no cuidado com o cidadão.',
  },
  {
    id: 2,
    title:
      'Gestão de Estoque em UBS: Eficiência com o Saúde+ na Dispensação de Medicamentos',
    category: 'Gestão',
    date: 'Abril 12, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1588774069270-10801c19fdf1?auto=format&fit=crop&w=2070&q=80',
    excerpt:
      'A organização dos insumos e o controle digital do estoque pelo Saúde+ têm sido peças-chave para evitar desperdícios e garantir abastecimento contínuo.',
  },
  {
    id: 3,
    title: 'O Papel da Anamnese Inteligente no Atendimento Humanizado',
    category: 'Atendimento',
    date: 'Abril 5, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1587502537745-84e6d7a1a4b0?auto=format&fit=crop&w=2070&q=80',
    excerpt:
      'Tecnologias como a anamnese automatizada do Reserva ajudam os profissionais a focar no cuidado, garantindo agilidade sem perder a empatia.',
  },
  {
    id: 4,
    title: 'Engajamento da Comunidade: A Chave para uma Saúde Preventiva',
    category: 'Comunidade',
    date: 'Março 29, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1588776815316-e292b4b3b24e?auto=format&fit=crop&w=2070&q=80',
    excerpt:
      'Educação em saúde, participação ativa e acompanhamento contínuo são estratégias eficazes no fortalecimento da atenção primária com o Saúde+.',
  },
  {
    id: 5,
    title: 'Teleatendimento e Acessibilidade: UBSs Mais Perto das Pessoas',
    category: 'Acessibilidade',
    date: 'Março 22, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1588776815042-17990fbb32fd?auto=format&fit=crop&w=2070&q=80',
    excerpt:
      'Ferramentas de agendamento remoto e atendimento virtual do Reserva têm ampliado o acesso à saúde, principalmente em regiões mais distantes.',
  },
  {
    id: 6,
    title: 'Indicadores de Saúde: Como Medir o Sucesso da Atenção Básica',
    category: 'Indicadores',
    date: 'Março 15, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1604503468508-b569a6dcb02f?auto=format&fit=crop&w=2070&q=80',
    excerpt:
      'Monitoramento de dados, metas e resultados com o Saúde+ são essenciais para evoluir na qualidade do atendimento e na tomada de decisão em saúde.',
  },
];

export function BlogSectionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleItems = screenSize.isDesktop ? 3 : screenSize.isTablet ? 2 : 1;
  const maxIndex = Math.max(0, blogPosts.length - visibleItems);

  useEffect(() => {
    const updateScreenSize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setScreenSize({
          isMobile: width < 640,
          isTablet: width >= 640 && width < 1024,
          isDesktop: width >= 1024,
        });
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [screenSize, maxIndex]);

  function handlePrevious() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }

  useEffect(() => {
    if (sliderRef.current) {
      const scrollToIndex = () => {
        if (sliderRef.current) {
          const cardWidth =
            sliderRef.current.querySelector('.carousel-item')?.clientWidth || 0;
          const scrollLeft = cardWidth * currentIndex;

          sliderRef.current.scrollTo({
            left: scrollLeft,
            behavior: 'smooth',
          });
        }
      };

      const timeoutId = setTimeout(scrollToIndex, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, screenSize]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsSwiping(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 5) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return;

    const currentX = e.changedTouches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < maxIndex) {
        handleNext();
      } else if (diff < 0 && currentIndex > 0) {
        handlePrevious();
      }
    }

    setIsSwiping(false);
  };

  const renderProgressIndicators = () => {
    return (
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-primary w-6' : 'bg-primary/30 w-2'
            }`}
            aria-label={`Ir para o slide ${i + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12">
      <div
        ref={containerRef}
        className="container mx-auto space-y-6 px-4 md:space-y-8 md:px-6 2xl:max-w-[1400px]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-md space-y-1">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Últimos Artigos sobre <br /> o Reserva e Saúde+
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Fique por dentro das nossas novidades e insights mais recentes
            </p>
          </div>
          <div className="flex hidden items-center space-x-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Slide anterior"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>

            <Button variant="outline" className="w-full max-w-sm" asChild>
              <Link to="#">Ver Todos os Artigos</Link>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              aria-label="Próximo slide"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="scrollbar-hide -mx-4 flex touch-pan-x snap-x snap-mandatory overflow-x-auto px-4 pt-1 pb-2 md:pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="carousel-item w-full flex-none snap-start px-2 sm:w-1/2 sm:px-4 lg:w-1/3"
              >
                <Card className="flex h-full flex-col overflow-hidden p-0 shadow-sm transition-shadow hover:shadow-md">
                  <CardContent className="flex-grow pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-muted-foreground flex items-center text-xs sm:text-sm">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        <span>{post.date}</span>
                      </div>

                      <Badge className="bg-primary hover:bg-primary/90">
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="mb-2 line-clamp-2 text-base font-semibold sm:text-lg">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-xs sm:line-clamp-3 sm:text-sm">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pb-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-sm"
                      asChild
                    >
                      <Link to="#" className="flex items-center justify-center">
                        Ler Artigo
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div className="sm:hidden">{renderProgressIndicators()}</div>

          <div className="mt-6 flex items-center justify-between sm:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="mr-2 h-9 flex-1 text-xs"
            >
              <ChevronLeftIcon className="mr-1 h-4 w-4" />
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="ml-2 h-9 flex-1 text-xs"
            >
              Próximo
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
