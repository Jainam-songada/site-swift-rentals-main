import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Make a Booking</h1>
        <p className="mb-4 text-muted-foreground">Fill the form below to start your booking.</p>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
