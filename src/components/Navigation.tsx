import { Star, Calendar, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface NavigationProps {
  onLoginClick: () => void;
}

export const Navigation = ({ onLoginClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <Star className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Bella Brows
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-smooth">
            Início
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-smooth">
            Serviços
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-smooth">
            Galeria
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">
            Depoimentos
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
            Contato
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            onClick={onLoginClick}
            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Agendar
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-foreground transition-smooth"></div>
              <div className="w-full h-0.5 bg-foreground transition-smooth"></div>
              <div className="w-full h-0.5 bg-foreground transition-smooth"></div>
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary transition-smooth">
              Início
            </a>
            <a href="#services" className="block text-foreground hover:text-primary transition-smooth">
              Serviços
            </a>
            <a href="#gallery" className="block text-foreground hover:text-primary transition-smooth">
              Galeria
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-primary transition-smooth">
              Depoimentos
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
            <Button 
              variant="outline" 
              onClick={onLoginClick}
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Horário
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};