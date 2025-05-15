import { Button } from '@/views/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/views/components/ui/card';
import { Input } from '@/views/components/ui/input';
import { Label } from '@/views/components/ui/label';
import { Textarea } from '@/views/components/ui/textarea';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContatoSection() {
  return (
    <section id="contato" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fale Conosco
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar no que você precisar relacionado à saúde do
            seu filho
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Seu nome</Label>
                    <Input id="name" placeholder="Nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Sobre o que deseja falar?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva como podemos ajudar..."
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <p className="text-muted-foreground">
                      contato@opediatra.com.br
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Respondemos em até 24h nos dias úteis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-muted-foreground">(79) 3214-5678</p>
                    <div className="flex gap-4 mt-2">
                      <Button asChild variant="outline" size="sm">
                        <Link to="tel:7932145678">Ligar agora</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="https://wa.me/557932145678" target="_blank">
                          WhatsApp
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Ministro Geraldo Barreto Sobral, 215 - Jardins
                    </p>
                    <p className="text-muted-foreground">
                      Aracaju/SE - 49026-040
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-2"
                    >
                      <Link
                        to="https://maps.google.com?q=Av.+Ministro+Geraldo+Barreto+Sobral,+215+-+Jardins+Aracaju/SE"
                        target="_blank"
                      >
                        Ver no mapa
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 7h às 19h
                    </p>
                    <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Plantão 24h para emergências
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mapa */}
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sm border dark:border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.123456789012!2d-37.12345678901234!3d-10.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzE1LjYiUyAzN8KwMDcnMjEuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do oPediatra no mapa"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-16 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Perguntas Frequentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                pergunta: 'Como marcar a primeira consulta?',
                resposta:
                  'Basta criar sua conta, selecionar um pediatra e escolher o horário disponível.',
              },
              {
                pergunta: 'Qual a antecedência para agendamento?',
                resposta:
                  'Você pode agendar consultas com até 60 dias de antecedência.',
              },
              {
                pergunta: 'Aceitam meu plano de saúde?',
                resposta:
                  'Atendemos os principais convênios. Consulte nossa lista completa.',
              },
              {
                pergunta: 'Como cancelar uma consulta?',
                resposta:
                  'Pelo seu painel de agendamentos, com até 24h de antecedência.',
              },
              {
                pergunta: 'Tem atendimento de urgência?',
                resposta:
                  'Sim, temos pediatras de plantão 24h para casos urgentes.',
              },
              {
                pergunta: 'Fazem consulta online?',
                resposta:
                  'Sim, oferecemos telemedicina para casos apropriados.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-sm"
              >
                <h4 className="font-medium mb-2">{item.pergunta}</h4>
                <p className="text-muted-foreground text-sm">{item.resposta}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="link" className="text-blue-600">
              <Link to="/faq">Ver todas as perguntas frequentes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
