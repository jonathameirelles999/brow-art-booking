import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Eye } from "lucide-react";
import transformationImage from "@/assets/eyebrow-transformation.jpg";
import toolsImage from "@/assets/beauty-tools.jpg";

const galleryItems = [
  {
    image: transformationImage,
    title: "Transformação Natural",
    description: "Design personalizado que realça a beleza natural",
    likes: 124,
    views: 890
  },
  {
    image: toolsImage, 
    title: "Ferramentas Premium",
    description: "Utilizamos apenas produtos de alta qualidade",
    likes: 98,
    views: 654
  },
  {
    image: transformationImage,
    title: "Resultado Profissional", 
    description: "Técnicas avançadas para resultados perfeitos",
    likes: 156,
    views: 1200
  },
  {
    image: toolsImage,
    title: "Ambiente Luxuoso",
    description: "Espaço elegante e acolhedor para seu conforto",
    likes: 87,
    views: 543
  }
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa <span className="gradient-primary bg-clip-text text-transparent">Galeria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos e se inspire com transformações incríveis. 
            Cada sobrancelha é única, assim como você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-elegant hover:shadow-premium transition-premium">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-premium">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transition-premium">
                  <div className="flex items-center space-x-1 bg-black/30 rounded-full px-2 py-1">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">{item.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-black/30 rounded-full px-2 py-1">
                    <Eye className="w-3 h-3" />
                    <span className="text-xs">{item.views}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram-style grid for mobile */}
        <div className="grid grid-cols-2 md:hidden gap-2 mb-8">
          {galleryItems.slice(0, 4).map((item, index) => (
            <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Mais Trabalhos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-muted-foreground mt-4">
            Siga-nos no <strong>@bellabrows</strong> para ver mais transformações diárias
          </p>
        </div>
      </div>
    </section>
  );
};