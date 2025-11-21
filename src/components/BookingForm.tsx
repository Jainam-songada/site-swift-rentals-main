import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.phone || !formData.location || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your booking.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      location: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Book Your <span className="text-primary">Equipment Now</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form and we'll get back to you with a quote
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 border-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-base font-semibold">
                Project Location *
              </Label>
              <Input
                id="location"
                placeholder="Enter site address"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-base font-semibold">
                Select Vehicle/Service *
              </Label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleInputChange("service", value)}
                required
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Choose equipment or service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jcb">JCB / Backhoe Loader</SelectItem>
                  <SelectItem value="excavator">Excavator</SelectItem>
                  <SelectItem value="crane">Crane</SelectItem>
                  <SelectItem value="tipper">Tipper / Dumper Truck</SelectItem>
                  <SelectItem value="tractor">Tractor with Trolley</SelectItem>
                  <SelectItem value="mixer">Concrete Mixer</SelectItem>
                  <SelectItem value="transport">Material Transport</SelectItem>
                  <SelectItem value="labour">Labour & Equipment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-base font-semibold">
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-base font-semibold">
                  Preferred Time
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-base font-semibold">
                Additional Notes
              </Label>
              <Textarea
                id="notes"
                placeholder="Any special requirements or additional information..."
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
