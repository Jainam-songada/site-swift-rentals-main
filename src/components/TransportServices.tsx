import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Box,
  Mountain,
  Building2,
  Boxes,
  Hammer,
  Trash2,
} from "lucide-react";

const materials = [
  {
    name: "Sand",
    icon: Mountain,
    description: "River sand, M-sand, and all types of construction sand",
  },
  {
    name: "Gravel",
    icon: Box,
    description: "Various sizes of gravel and aggregate for your project",
  },
  {
    name: "Cement",
    icon: Boxes,
    description: "Bulk cement delivery from trusted manufacturers",
  },
  {
    name: "Bricks",
    icon: Building2,
    description: "Red bricks, fly ash bricks, and AAC blocks",
  },
  {
    name: "Steel",
    icon: Hammer,
    description: "TMT bars, steel rods, and structural steel delivery",
  },
  {
    name: "Debris Removal",
    icon: Trash2,
    description: "Construction waste and debris disposal services",
  },
];

const TransportServices = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Diagonal stripe background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 30px,
              hsl(var(--construction-yellow)) 30px,
              hsl(var(--construction-yellow)) 35px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Material <span className="text-primary">Transport Services</span>
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Complete logistics solution for all your construction material needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {materials.map((material, index) => {
            const Icon = material.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card hover:bg-primary/5 border-2 hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">
                      {material.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {material.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToBooking}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6 rounded-md transition-all duration-300 hover:scale-105"
          >
            Hire Transport Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransportServices;
