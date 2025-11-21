import { Card } from "@/components/ui/card";
import { Search, MapPin, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Vehicle",
    description: "Browse our extensive fleet and select the perfect equipment for your project needs",
    number: "01",
  },
  {
    icon: MapPin,
    title: "Confirm Your Location",
    description: "Provide your project site location for accurate delivery and pickup scheduling",
    number: "02",
  },
  {
    icon: CheckCircle2,
    title: "Get Instant Quote",
    description: "Receive immediate pricing and driver assignment with booking confirmation",
    number: "03",
  },
];

const BookingProcess = () => {
  return (
    <section className="py-20 bg-construction-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-construction-black mb-4">
            Simple <span className="text-primary">Booking Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-primary/20">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-1 h-1 bg-primary rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-1 h-1 bg-primary rounded-full" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group bg-card z-10"
              >
                <div className="space-y-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <span className="font-heading font-black text-2xl text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="pt-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-2xl text-card-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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

export default BookingProcess;
