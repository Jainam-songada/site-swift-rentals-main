import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Gauge, Shield, CheckCircle2 } from "lucide-react";

const vehicles = [
  {
    name: "JCB 3DX Backhoe Loader",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop",
    pricePerHour: "₹1,500",
    pricePerDay: "₹12,000",
    features: ["4WD", "1.0 m³ Bucket", "Experienced Operator", "Fuel Included"],
  },
  {
    name: "TATA 2518 Tipper Truck",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    pricePerHour: "₹2,000",
    pricePerDay: "₹15,000",
    features: ["25 Ton Capacity", "Hydraulic System", "Driver Provided", "GPS Tracking"],
  },
  {
    name: "Komatsu PC200 Excavator",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    pricePerHour: "₹2,500",
    pricePerDay: "₹20,000",
    features: ["20 Ton Class", "Long Reach", "Fuel Efficient", "24/7 Support"],
  },
  {
    name: "Hydraulic Mobile Crane",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&h=600&fit=crop",
    pricePerHour: "₹3,500",
    pricePerDay: "₹28,000",
    features: ["50 Ton Capacity", "Telescopic Boom", "Certified Operator", "Insurance Covered"],
  },
];

const FeaturedVehicles = () => {
  const handleBooking = (vehicleName: string) => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
      // Could also pre-fill the vehicle name in the form
    }
  };

  return (
    <section id="vehicles" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Featured <span className="text-primary">Vehicles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium construction equipment ready for immediate deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold">
                  Available Now
                </Badge>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-heading font-bold text-2xl text-card-foreground">
                  {vehicle.name}
                </h3>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Per Hour:</span>
                    <span className="font-bold text-primary text-lg">
                      {vehicle.pricePerHour}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Gauge className="w-4 h-4" />
                    <span className="text-sm">Per Day:</span>
                    <span className="font-bold text-primary text-lg">
                      {vehicle.pricePerDay}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleBooking(vehicle.name)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-4"
                  size="lg"
                >
                  Request Booking
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
