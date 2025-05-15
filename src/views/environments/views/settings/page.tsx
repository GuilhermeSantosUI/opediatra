import { Avatar, AvatarImage } from '@/views/components/ui/avatar';
import { Button } from '@/views/components/ui/button';
import { Input } from '@/views/components/ui/input';
import { Label } from '@/views/components/ui/label';
import { Separator } from '@/views/components/ui/separator';
import { User } from '@phosphor-icons/react';
import { useState } from 'react';

export function Settings() {
  const [preview, setPreview] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <div className="w-full md:w-[700px] flex gap-10 flex-col-reverse md:flex-row">
        <div className="w-full">
          <div>
            <h3 className="text-lg font-medium">Perfil</h3>
            <p className="text-sm text-muted-foreground">
              Assim é como os outros irão te ver no site.
            </p>
          </div>

          <Separator className="my-4" />

          <div className="space-y-2 mb-6">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Insira o seu e-mail"
              disabled
            />
            <p className="text-sm text-muted-foreground">
              Para alterar o e-mail, clique no botão acima.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Insira o seu nome" />
            </div>

            <div>
              <Label htmlFor="birthday">Data de nascimento</Label>
              <Input
                id="birthday"
                type="date"
                placeholder="Insira a sua data de nascimento"
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" placeholder="Insira o seu telefone" />
            </div>

            <div>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </div>

        <div className="relative flex flex-col items-start">
          <p className="text-sm mb-2">Foto de perfil:</p>
          <label className="relative cursor-pointer h-28 w-28">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 z-10 cursor-pointer"
            />
            {preview ? (
              <Avatar className="h-28 w-28 rounded-md border">
                <AvatarImage
                  src={preview}
                  alt="Foto de perfil"
                  className="object-cover"
                />
              </Avatar>
            ) : (
              <div className="h-28 w-28 rounded-md border flex items-center justify-center">
                <User className="w-10 h-10" />
              </div>
            )}
          </label>
          <p className="text-xs text-muted-foreground mt-2">
            Apenas arquivos: <b>.png</b>, <b>.jpg</b>, <b>.jpeg</b>
          </p>
        </div>
      </div>
    </div>
  );
}
