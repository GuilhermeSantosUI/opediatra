import { AnimatedGroup } from '@/views/components/ui/animated-group';
import { Button } from '@/views/components/ui/button';
import { TextEffect } from '@/views/components/ui/text-effect';
import { HeroHeader } from '@/views/environments/website/components/hero5-header';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Médico atendendo criança"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    to="#funcionalidades"
                    className="hover:bg-white dark:hover:border-t-border bg-blue-50 group mx-auto flex w-fit items-center gap-4 rounded-full border border-blue-100 p-1 pl-4 shadow-md shadow-blue-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-blue-950 dark:hover:bg-blue-950 dark:bg-blue-900 dark:border-blue-800"
                  >
                    <span className="text-blue-950 text-sm dark:text-blue-50">
                      Novidade: Agendamento pediátrico simplificado
                    </span>
                    <span className="dark:border-white block h-4 w-0.5 border-l bg-white dark:bg-blue-700 dark:dark:border-blue-950"></span>
                    <div className="bg-white group-hover:bg-blue-100 size-6 overflow-hidden rounded-full duration-500 dark:bg-blue-950 dark:group-hover:bg-blue-800">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  Cuidado pediátrico com agendamento fácil e rápido
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  O oPediatra simplifica o agendamento de consultas para seu
                  filho. Marque horários com pediatras especializados em poucos
                  cliques, sem complicações.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="rounded-[calc(var(--radius-xl)+0.125rem)] p-0.5 dark:bg-blue-50/10 dark:border-blue-800"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base bg-blue-600 hover:bg-blue-700"
                    >
                      <Link to="#cadastro">
                        <span className="text-nowrap">Agendar consulta</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="rounded-xl px-5 text-blue-600 hover:text-blue-700"
                  >
                    <Link to="#demo">
                      <span className="text-nowrap">
                        Conheça nossos pediatras
                      </span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-white dark:inset-shadow-white/20 bg-white relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-blue-200 p-4 shadow-lg shadow-blue-950/15 ring-1 dark:ring-blue-950 dark:bg-blue-950 dark:border-blue-800">
                  <img
                    className="bg-white aspect-15/8 relative hidden rounded-2xl dark:block dark:bg-blue-950"
                    src="https://elements-resized.envatousercontent.com/elements-video-cover-images/ef56fd4d-4721-4288-befc-57b5a2cc3886/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=696134be34cbf3dd3e742bddb0f36128cb14da6ec8b8c2abd45e761038c34d15"
                    alt="Interface do sistema oPediatra"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-blue-200/25 aspect-15/8 relative rounded-2xl border border-blue-200 dark:hidden dark:border-blue-800/25 dark:border-blue-800"
                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Interface do sistema oPediatra"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        <section className="bg-white pb-16 pt-16 md:pb-32 dark:bg-blue-950">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                to="/pediatras"
                className="block text-sm duration-150 hover:opacity-75 text-blue-600"
              >
                <span> Conheça nossa equipe de pediatras</span>
                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="group-hover:blur-xs mx-auto mt-12 opacity-70 grayscale grid max-w-4xl grid-cols-5 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Pediatra atendendo criança"
                />
              </div>
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
                  alt="Consulta pediátrica"
                />
              </div>
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://elements-resized.envatousercontent.com/elements-video-cover-images/ef56fd4d-4721-4288-befc-57b5a2cc3886/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=696134be34cbf3dd3e742bddb0f36128cb14da6ec8b8c2abd45e761038c34d15"
                  alt="Exame pediátrico"
                />
              </div>
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://static.vecteezy.com/ti/fotos-gratis/p1/13944114-bebe-recem-nascido-de-um-mes-de-idade-raca-mista-afro-tailandesa-chorando-doente-visitando-o-medico-para-exame-de-saude-com-estetoscopio-na-clinica-pediatrica-consulta-de-conceito-check-up-enfermeira-cura-infantil-foto.jpg"
                  alt="Vacinação infantil"
                />
              </div>
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Atendimento neonatal"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
