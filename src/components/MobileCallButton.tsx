import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCallButton = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-construction-black border-t-4 border-primary shadow-2xl">
      <div className="container mx-auto px-4 py-3">
        <Button
          asChild
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14"
        >
          <a href="tel:9327264950" className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Call Now: 9327264950
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileCallButton;
