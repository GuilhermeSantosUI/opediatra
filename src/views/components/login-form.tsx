import { cn } from '@/app/utils';
import { GithubLogo, Spinner } from '@phosphor-icons/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/reunioes');
    }, 5000);
  }

  return (
    <form
      className={cn('flex flex-col gap-6', className)}
      onSubmit={handleSubmit}
      {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Reserva.</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Informe seu e-mail institucional para gerenciar reservas de salas
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="voce@segipetec.org.br" />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline">
              Esqueceu a senha?
            </a>
          </div>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Spinner className="spinner-border animate-spin w-4 h-4" />
              Carregando...
            </span>
          ) : (
            'Entrar'
          )}
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>

        <Button variant="outline" className="w-full flex gap-2">
          <GithubLogo weight="duotone" />
          Entrar com GitHub
        </Button>
      </div>
      <div className="text-center text-sm">
        Ainda não tem acesso?{' '}
        <a href="#" className="underline underline-offset-4">
          Solicitar cadastro
        </a>
      </div>
    </form>
  );
}
