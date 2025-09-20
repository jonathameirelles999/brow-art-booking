import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Sparkles, Clock, Star, Award } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Design de Sobrancelhas",
    description: "Técnica personalizada para o formato do seu rosto, realçando sua beleza natural.",
    price: "R$ 80",
    duration: "45min",
    features: ["Análise facial", "Design personalizado", "Depilação com pinça"]
  },
  {
    icon: Palette,
    title: "Henna Premium",
    description: "Coloração natural que define e preenche as sobrancelhas por até 15 dias.",
    price: "R$ 120", 
    duration: "60min",
    features: ["Henna importada", "Cor personalizada", "Duração de 15 dias"]
  },
  {
    icon: Sparkles,
    title: "Micropigmentação",
    description: "Técnica definitiva para sobrancelhas sempre perfeitas, com resultado natural.",
    price: "R$ 450",
    duration: "2h",
    features: ["Técnica fio a fio", "Anestesia tópica", "Retoque incluso"]
  },
  {
    icon: Award,
    title: "Combo Premium",
    description: "Design + Henna + Manutenção. O tratamento completo para suas sobrancelhas.",
    price: "R$ 180",
    duration: "90min",
    features: ["Design completo", "Henna premium", "Manutenção 30 dias"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Técnicas exclusivas e produtos premium para realçar a beleza das suas sobrancelhas
            com resultados naturais e duradouros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="gradient-card border-border/50 hover:shadow-elegant transition-premium group cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-glow transition-premium">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                      {service.price}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <Star className="w-4 h-4 text-primary" fill="currentColor" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-premium">
                    Agendar Serviço
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-medium text-primary">Primeira sessão com 20% de desconto</span>
          </div>
          <p className="text-muted-foreground">
            Não encontrou o que procura? Entre em contato para um atendimento personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};