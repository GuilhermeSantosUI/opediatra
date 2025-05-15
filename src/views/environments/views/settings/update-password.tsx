import { Button } from '@/views/components/ui/button';
import { Input } from '@/views/components/ui/input';
import { Label } from '@/views/components/ui/label';
import { Separator } from '@/views/components/ui/separator';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useState } from 'react';

export function UpdatePassword() {
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="w-full md:w-[500px]">
      <div>
        <h3 className="text-lg font-medium">Atualizar senha</h3>
        <p className="text-sm text-muted-foreground">
          Altere a sua senha de acesso ao sistema.
        </p>
      </div>

      <Separator className="my-4" />

      <form className="flex flex-col gap-6">
        {/* Senha atual */}
        <div className="space-y-2 relative">
          <Label htmlFor="oldPassword">Senha atual</Label>
          <Input
            id="oldPassword"
            type={currentPasswordVisible ? 'text' : 'password'}
            placeholder="Insira a sua senha atual"
          />
          <button
            type="button"
            onClick={() => setCurrentPasswordVisible(!currentPasswordVisible)}
            className="absolute right-4 top-1/2"
          >
            {currentPasswordVisible ? (
              <EyeSlash className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Nova senha */}
        <div className="space-y-2 relative">
          <Label htmlFor="newPassword">Nova senha</Label>
          <Input
            id="newPassword"
            type={newPasswordVisible ? 'text' : 'password'}
            placeholder="Insira a sua nova senha"
          />
          <button
            type="button"
            onClick={() => setNewPasswordVisible(!newPasswordVisible)}
            className="absolute right-4 top-1/2"
          >
            {newPasswordVisible ? (
              <EyeSlash className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Confirmar nova senha */}
        <div className="space-y-2 relative">
          <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
          <Input
            id="confirmPassword"
            type={confirmPasswordVisible ? 'text' : 'password'}
            placeholder="Confirme a sua nova senha"
          />
          <button
            type="button"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            className="absolute right-4 top-1/2"
          >
            {confirmPasswordVisible ? (
              <EyeSlash className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        <Button type="submit" className='w-fit'>Salvar</Button>
      </form>
    </div>
  );
}
