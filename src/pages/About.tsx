import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-5xl p-6">
        <h1 className="mb-4 text-3xl font-bold">About Swift Rentals</h1>
        <p className="mb-4 text-muted-foreground">
          Swift Rentals provides reliable and affordable vehicle rentals for personal and business needs.
          We focus on safety, cleanliness, and friendly customer service.
        </p>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">To make vehicle rental seamless and enjoyable.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
