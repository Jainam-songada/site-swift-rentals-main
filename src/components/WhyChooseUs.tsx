import { Card } from "@/components/ui/card";
import {
  ShieldCheck,
  DollarSign,
  Zap,
  Headphones,
  Eye,
  Calendar,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Machines & Drivers",
    description:
      "All equipment regularly inspected and certified operators with proven track records",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Competitive rates with transparent billing and no hidden charges",
  },
  {
    icon: Zap,
    title: "Fast Pickup & Drop",
    description:
      "Quick equipment deployment within hours of booking confirmation",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service and emergency assistance available",
  },
  {
    icon: Eye,
    title: "100% Transparency",
    description:
      "Clear documentation, real-time tracking, and detailed invoicing",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description:
      "Simple online booking with immediate confirmation and scheduling",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading service with commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default WhyChooseUs;
