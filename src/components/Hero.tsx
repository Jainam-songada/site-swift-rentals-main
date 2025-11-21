import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVehicles = () => {
    document.getElementById("vehicles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site with heavy equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-black/95 via-construction-black/85 to-construction-black/70" />
      </div>

      {/* Diagonal Stripe Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              hsl(var(--construction-yellow)) 20px,
              hsl(var(--construction-yellow)) 25px
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
            Rent Construction Vehicles & Transport Services
            <span className="block text-primary mt-4">
              Fast, Affordable & Anywhere
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            One platform for renting JCBs, trucks, equipment and transporting
            material across your city.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Book Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToVehicles}
              className="border-2 border-white text-white hover:bg-white hover:text-construction-black font-bold text-lg px-8 py-6 rounded-md transition-all duration-300 hover:scale-105"
            >
              View Vehicles
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="pt-8">
            <a
              href="tel:9327264950"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>Call: 9327264950</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
