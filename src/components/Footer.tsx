import { Star, Instagram, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Bella Brows</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Transformando olhares com técnicas exclusivas de design de sobrancelhas. 
              Sua beleza natural realçada com profissionalismo e cuidado.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-smooth cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-smooth cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-smooth cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">Design de Sobrancelhas</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Henna Premium</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Micropigmentação</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Combo Premium</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Manutenção</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#home" className="hover:text-background transition-smooth">Início</a></li>
              <li><a href="#services" className="hover:text-background transition-smooth">Serviços</a></li>
              <li><a href="#gallery" className="hover:text-background transition-smooth">Galeria</a></li>
              <li><a href="#testimonials" className="hover:text-background transition-smooth">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-background transition-smooth">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Rua das Flores, 123 - Centro, SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@bellabrows.com</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Horário de Funcionamento</h4>
              <div className="text-sm text-background/80 space-y-1">
                <div>Seg - Sex: 09:00 - 18:00</div>
                <div>Sábado: 09:00 - 16:00</div>
                <div>Domingo: Fechado</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2024 Bella Brows. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-smooth">Política de Privacidade</a>
              <a href="#" className="hover:text-background transition-smooth">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};