import { Card } from "@/components/ui/card";
import {
  Truck,
  Anvil,
  Move,
  Construction,
  Tractor,
  Container,
  Package,
  Users,
} from "lucide-react";

const categories = [
  {
    name: "JCB / Backhoe Loader",
    icon: Construction,
    description: "Versatile excavation and loading equipment for all site needs",
  },
  {
    name: "Excavator",
    icon: Anvil,
    description: "Heavy-duty digging and earthmoving machinery",
  },
  {
    name: "Crane",
    icon: Move,
    description: "Lifting solutions for high-rise and heavy construction",
  },
  {
    name: "Tipper / Dumper Truck",
    icon: Truck,
    description: "Material transportation and dumping vehicles",
  },
  {
    name: "Tractor with Trolley",
    icon: Tractor,
    description: "Agricultural and construction site transportation",
  },
  {
    name: "Concrete Mixer",
    icon: Container,
    description: "On-site concrete mixing and delivery equipment",
  },
  {
    name: "Material Transport Services",
    icon: Package,
    description: "Complete material logistics and delivery solutions",
  },
  {
    name: "Labour & Site Equipment",
    icon: Users,
    description: "Skilled workforce and essential construction tools",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-construction-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-construction-black mb-4">
            Equipment & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of construction equipment and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary bg-card hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-card-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
