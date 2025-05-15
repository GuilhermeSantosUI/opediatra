import { cn } from '@/app/utils';
import { Button } from '@/views/components/ui/button';
import { CalendarCheck, Stethoscope } from '@phosphor-icons/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [
  { name: 'Nossos Pediatras', href: '#pediatras' },
  { name: 'Como Funciona', href: '#funcionamento' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Contato', href: '#contato' },
];

export function HeroHeader() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleRedirect(e: React.FormEvent) {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 left-1/2 transform -translate-x-1/2">
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled &&
              'bg-background/50 max-w-4xl rounded-2xl border border-blue-200 backdrop-blur-lg lg:px-5 dark:border-blue-800',
          )}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Stethoscope
                    className="size-6 text-white"
                    weight="duotone"
                  />
                </div>
                <div className="grid flex-1 text-left text-xs">
                  <span className="truncate text-lg font-semibold text-blue-800 dark:text-blue-100">
                    oPediatra
                  </span>
                  <span className="truncate text-blue-600 dark:text-blue-300">
                    Agendamento pediátrico
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-blue-600 hover:text-blue-800 block duration-150 dark:text-blue-300 dark:hover:text-blue-100">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-blue-200 p-6 shadow-2xl shadow-blue-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent dark:bg-blue-950 dark:border-blue-800">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-blue-600 hover:text-blue-800 block duration-150 dark:text-blue-300 dark:hover:text-blue-100">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  className={cn(isScrolled && 'lg:hidden', 'bg-blue-600 hover:bg-blue-700')}
                  onClick={handleRedirect}>
                  Agendar Consulta
                </Button>
                <Button
                  size="sm"
                  variant={isScrolled ? 'default' : 'outline'}
                  onClick={handleRedirect}
                  className={cn(
                    isScrolled ? 'lg:inline-flex' : 'hidden',
                    'bg-blue-600 hover:bg-blue-700 text-white'
                  )}>
                  <span>
                    <span className="hidden lg:inline">Agendar Consulta</span>
                    <CalendarCheck className="lg:hidden size-4" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}