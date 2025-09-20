import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-eyebrows.jpg";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            <span className="text-white font-medium">Studio Premium de Sobrancelhas</span>
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Sobrancelhas
            <span className="block text-gradient-primary">
              Perfeitas
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Transforme seu olhar com técnicas exclusivas de design de sobrancelhas. 
            Realce sua beleza natural com nossa experiência premium e atendimento personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={onBookingClick}
              className="btn-premium text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Avaliação Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="glass-effect text-white hover:bg-white/20 transition-premium text-lg px-8 py-4"
            >
              Ver Nossos Trabalhos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center space-x-8 mt-12 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <span className="font-medium">5.0 estrelas</span>
            </div>
            <div>
              <span className="font-medium">500+ clientes</span>
            </div>
            <div>
              <span className="font-medium">3 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-primary-glow/30 to-primary/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};