import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontas para atender você! Agende sua avaliação gratuita 
            ou tire suas dúvidas através dos nossos canais de atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Localização</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rua das Flores, 123 - Centro<br />
                  São Paulo - SP, 01234-567
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Ver no Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span className="text-muted-foreground">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-muted-foreground">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="gradient-card border-border/50 hover:shadow-elegant transition-premium cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">Telefone</div>
                  <div className="text-muted-foreground text-sm">(11) 9 9999-9999</div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border/50 hover:shadow-elegant transition-premium cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <div className="text-muted-foreground text-sm">(11) 9 9999-9999</div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border/50 hover:shadow-elegant transition-premium cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">E-mail</div>
                  <div className="text-muted-foreground text-sm">contato@bellabrows.com</div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border/50 hover:shadow-elegant transition-premium cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Instagram className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">Instagram</div>
                  <div className="text-muted-foreground text-sm">@bellabrows</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card border-border/50 shadow-premium">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome Completo</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefone</label>
                  <Input placeholder="(11) 9 9999-9999" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">E-mail</label>
                <Input type="email" placeholder="seu.email@exemplo.com" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Serviço de Interesse</label>
                <Input placeholder="Ex: Design de Sobrancelhas, Henna, Micropigmentação..." />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos mais sobre o que você precisa ou suas dúvidas..."
                  rows={4}
                />
              </div>

              <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-premium">
                Enviar Mensagem
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Responderemos em até 2 horas durante nosso horário de funcionamento
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};