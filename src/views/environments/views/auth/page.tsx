import { LoginForm } from '@/views/components/login-form';
import { Heart, Stethoscope } from '@phosphor-icons/react';

export function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-blue-50 dark:bg-blue-950/10">
      {/* Seção do Formulário */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Stethoscope className="size-5 text-white" weight="duotone" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-blue-800 dark:text-blue-200">oPediatra</span>
              <span className="truncate text-xs text-blue-600 dark:text-blue-400">Agendamento pediátrico</span>
            </div>
          </a>
        </div>
        
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
        
        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} oPediatra by Obixy - Todos os direitos reservados
        </div>
      </div>

      {/* Seção da Imagem */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Médico atendendo criança"
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Overlay com mensagem */}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-20 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="size-8" weight="duotone" />
            <h3 className="text-2xl font-bold">Cuidado que inspira confiança</h3>
          </div>
          <p className="max-w-md opacity-90">
            Conectamos famílias aos melhores especialistas em saúde infantil com agendamento rápido e seguro.
          </p>
        </div>
      </div>
    </div>
  );
}