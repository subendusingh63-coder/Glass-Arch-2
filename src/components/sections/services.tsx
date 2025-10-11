import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Frame, Wind, Sparkles, Square, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  { 
    icon: ShieldCheck, 
    title: "Toughened Glass",
    description: "High-strength safety glass for doors, windows, and partitions."
  },
  { 
    icon: Frame, 
    title: "Slim Aluminium",
    description: "Sleek, modern, and durable profiles for a minimalist aesthetic."
  },
  { 
    icon: Wind, 
    title: "uPVC Solutions",
    description: "Energy-efficient and low-maintenance windows and doors."
  },
  { 
    icon: Sparkles, 
    title: "Decorative Glass",
    description: "Custom designs and finishes to elevate your interior spaces."
  },
  { 
    icon: Square, 
    title: "Mirror Solutions",
    description: "Custom-cut and framed mirrors for any residential or commercial need."
  },
  { 
    icon: Layers, 
    title: "All Types of Glass",
    description: "A wide range of glass types including frosted, tinted, and laminated."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            We provide all types of toughened glass, slim profile aluminium, uPVC, decorative glass and mirror solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
             <div key={index} className="animate-in fade-in-0 slide-in-from-bottom-10 duration-1000" style={{ animationDelay: `${index * 100}ms`}}>
                <Card className="text-center bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full">
                  <CardHeader className="items-center pb-4">
                    <div className="bg-primary/10 p-4 rounded-full transition-transform group-hover:scale-110 mb-2">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
