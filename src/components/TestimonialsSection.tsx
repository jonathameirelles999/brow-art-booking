import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Advogada",
    content: "Simplesmente perfeito! A técnica da Bella Brows transformou completamente meu olhar. Agora acordo todos os dias com sobrancelhas perfeitas.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Ana Costa",
    role: "Empresária", 
    content: "Profissionalismo excepcional! O ambiente é acolhedor e o resultado superou todas as minhas expectativas. Recomendo de olhos fechados!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Carolina Mendes",
    role: "Influenciadora",
    content: "Há anos procurava alguém que entendesse o formato do meu rosto. Encontrei na Bella Brows! Trabalho impecável e duradouro.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Letícia Rodrigues",
    role: "Designer",
    content: "A micropigmentação foi a melhor decisão que tomei. Resultado natural, sem dor e com acompanhamento pós-procedimento excepcional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Juliana Santos",
    role: "Médica",
    content: "Como profissional da saúde, valorizo muito a higiene e segurança. A Bella Brows superou todas as minhas expectativas em todos os aspectos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Camila Oliveira",
    role: "Professora",
    content: "Atendimento personalizado e resultado incrível! Minhas sobrancelhas nunca estiveram tão bem definidas e naturais. Amei cada detalhe!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Nossas <span className="gradient-primary bg-clip-text text-transparent">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação das nossas clientes é nossa maior conquista. 
            Confira alguns depoimentos reais de quem confia na Bella Brows.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-muted-foreground">Clientes Satisfeitas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">5.0</div>
            <div className="text-muted-foreground flex items-center justify-center space-x-1">
              <span>Avaliação</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de Retorno</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">3</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:shadow-elegant transition-premium">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-4">
            <Star className="w-5 h-5 text-primary" fill="currentColor" />
            <span className="font-medium text-primary">Junte-se a mais de 500 clientes satisfeitas</span>
            <Star className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
};