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
              className="absolute inset-0 -z-20">
              <img
                src="https://www.se.gov.br/anexos/uploads/image/image/365710/97ee5ff6e389109cf705db97d596f281.jpg"
                alt="Sala de reuniões do SergipeTec"
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
                    className="hover:bg-white dark:hover:border-t-border bg-gray-100 group mx-auto flex w-fit items-center gap-4 rounded-full border border-gray-200 p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:bg-gray-950 dark:bg-gray-800 dark:border-gray-800">
                    <span className="text-gray-950 text-sm dark:text-gray-50">
                      Novidade: Agendamento simplificado de salas
                    </span>
                    <span className="dark:border-white block h-4 w-0.5 border-l bg-white dark:bg-zinc-700 dark:dark:border-gray-950"></span>
                    <div className="bg-white group-hover:bg-gray-100 size-6 overflow-hidden rounded-full duration-500 dark:bg-gray-950 dark:group-hover:bg-gray-800">
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
                  className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                  Otimize seu tempo com o sistema Reserva
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                  Agendamento rápido e intuitivo de salas no SergipeTec. Reserve
                  auditórios, salas de reunião e espaços de trabalho em poucos
                  cliques.
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
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div
                    key={1}
                    className="rounded-[calc(var(--radius-xl)+0.125rem)] p-0.5 dark:bg-gray-50/10 dark:border-gray-800">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base">
                      <Link to="#cadastro">
                        <span className="text-nowrap">Reservar agora</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="rounded-xl px-5">
                    <Link to="#demo">
                      <span className="text-nowrap">
                        Conheça as salas disponíveis
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
              }}>
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-white dark:inset-shadow-white/20 bg-white relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200 p-4 shadow-lg shadow-zinc-950/15 ring-1 dark:ring-gray-950 dark:bg-gray-950 dark:border-gray-800">
                  <img
                    className="bg-white aspect-15/8 relative hidden rounded-2xl dark:block dark:bg-gray-950"
                    src="https://www.se.gov.br/anexos/uploads/image/image/361371/slide_1c2be5e153db308ab517252b94821d69.jpg"
                    alt="Interface do sistema Reserva"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-gray-200/25 aspect-15/8 relative rounded-2xl border border-gray-200 dark:hidden dark:border-gray-800/25 dark:border-gray-800"
                    src="https://www.se.gov.br/anexos/uploads/image/image/361371/slide_1c2be5e153db308ab517252b94821d69.jpg"
                    alt="Interface do sistema Reserva"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        <section className="bg-white pb-16 pt-16 md:pb-32 dark:bg-gray-950">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                to="/salas"
                className="block text-sm duration-150 hover:opacity-75">
                <span> Veja todas as salas disponíveis</span>
                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="group-hover:blur-xs mx-auto mt-12 opacity-70 grayscale grid max-w-4xl grid-cols-5 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://www.se.gov.br/anexos/uploads/image/image/359971/39053b63c919befad6102580172261be.jpeg"
                  alt="Sala de Treinamento"
                />
              </div>
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://www.se.gov.br/anexos/uploads/image/image/365710/97ee5ff6e389109cf705db97d596f281.jpg"
                  alt="Sala de Reuniões"
                />
              </div>
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://sergipetec.org.br/wp-content/uploads/2025/01/SERGIPETEC-BIO.jpg"
                  alt="Sala de Conferências"
                />
              </div>
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://www.ufs.br/uploads/body_image/gist/128153/WhatsApp_Image_2021-06-08_at_14.56.07.jpeg"
                  alt="Sala de Apresentações"
                />
              </div>
              <div className="flex">
                <img
                  className="object-cover w-44 rounded-xl"
                  src="https://static.wixstatic.com/media/35c37d_3d29985aca904de6989546fa7c8c74b1~mv2.jpg/v1/fill/w_1800,h_760,al_c,q_85,enc_avif,quality_auto/35c37d_3d29985aca904de6989546fa7c8c74b1~mv2.jpg"
                  alt="Sala de Planejamento"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
