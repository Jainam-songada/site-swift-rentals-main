import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-5xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Our Services</h1>
        <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
          <li>Daily and hourly vehicle rentals</li>
          <li>Airport pickup and drop-off</li>
          <li>Corporate and long-term rentals</li>
          <li>Chauffeur services on request</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
