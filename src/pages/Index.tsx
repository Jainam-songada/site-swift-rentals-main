import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import TransportServices from "@/components/TransportServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingProcess from "@/components/BookingProcess";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCallButton from "@/components/MobileCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedVehicles />
      <TransportServices />
      <WhyChooseUs />
      <BookingProcess />
      <Testimonials />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
      <MobileCallButton />
    </div>
  );
};

export default Index;
