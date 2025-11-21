import { useState } from "react";

const HomeIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V10.5z" />
  </svg>
);

const TruckIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4zM13 16V8H3v8h1m16-2v-3a2 2 0 00-2-2h-3" />
  </svg>
);

const Index = () => {
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    setBookingStatus(`Thanks ${name || "Guest"}! Your booking request has been received.`);
    e.currentTarget.reset();
    window.location.hash = "booking";
  };

  return (
    <div className="min-h-screen">
      <section id="home" className="hm-section bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold">HeavyMove — Reliable Heavy Transport</h1>
              <p className="mb-4 text-lg text-muted-foreground">We move heavy machinery and vehicles safely and on time.</p>
              <p className="mb-4">
                Tagline: Trusted transport solutions for construction and industry — on schedule, every time.
              </p>
              <ul className="mb-6 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Specialized heavy machinery handling</li>
                <li>Experienced drivers & certified equipment</li>
                <li>Nationwide local & long-distance moves</li>
              </ul>
              <a href="#booking" className="inline-block rounded-md bg-primary px-6 py-3 text-white shadow hover:opacity-95">Get a Quote</a>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-56 w-56 rounded-lg bg-muted flex items-center justify-center">
                <TruckIcon className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="hm-section">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-3 text-2xl font-bold">About HeavyMove</h2>
          <p className="mb-4 text-muted-foreground">HeavyMove started with a single truck and a big promise: to deliver bulky equipment across the country without headache. Over the years we've grown into a focused fleet dedicated to construction and industrial clients.</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold">Mission</h3>
              <p className="text-muted-foreground">To provide safe, timely and cost-effective heavy transport services.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Vision</h3>
              <p className="text-muted-foreground">To be the most trusted partner for heavy transport across all major corridors.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Why Choose Us</h3>
              <p className="text-muted-foreground">Expert handlers, modern trailers, full insurance, and transparent pricing.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold">Safety</h4>
              <p className="text-muted-foreground">All transports follow safety checklists, secure tie-downs and certified equipment.</p>
            </div>
            <div>
              <h4 className="font-semibold">Reliability</h4>
              <p className="text-muted-foreground">Real-time tracking and clear communication for every move.</p>
            </div>
            <div>
              <h4 className="font-semibold">Experience</h4>
              <p className="text-muted-foreground">Decades of combined experience moving oversize and heavy loads.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="hm-section bg-muted">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-2xl font-bold">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="service-card rounded-lg border p-4 bg-white">
              <div className="mb-2 flex items-center gap-3">
                <TruckIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Heavy Machinery Transport</h3>
              </div>
              <p className="text-sm text-muted-foreground">Specialized trailers and secure loading for excavators, cranes and more.</p>
            </div>

            <div className="service-card rounded-lg border p-4 bg-white">
              <div className="mb-2 flex items-center gap-3">
                <HomeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Construction Vehicle Transport</h3>
              </div>
              <p className="text-sm text-muted-foreground">Transport service vehicles, dumpers and site equipment safely.</p>
            </div>

            <div className="service-card rounded-lg border p-4 bg-white">
              <div className="mb-2 flex items-center gap-3">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" /></svg>
                <h3 className="text-lg font-semibold">Material Transport</h3>
              </div>
              <p className="text-sm text-muted-foreground">Bulk materials, aggregates and supplies moved reliably.</p>
            </div>

            <div className="service-card rounded-lg border p-4 bg-white">
              <div className="mb-2 flex items-center gap-3">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14" /></svg>
                <h3 className="text-lg font-semibold">Local & Long-Distance Moving</h3>
              </div>
              <p className="text-sm text-muted-foreground">Flexible scheduling for local site moves or cross-country transport.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="hm-section">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-4 text-2xl font-bold">Booking</h2>
          <p className="mb-4 text-muted-foreground">Fill in the details and we’ll get back with a quote.</p>

          <form onSubmit={handleBookingSubmit} className="space-y-4 rounded-lg border p-6 bg-white">
            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" required className="w-full rounded border px-3 py-2" placeholder="Name" />
              <input name="phone" required className="w-full rounded border px-3 py-2" placeholder="Phone number" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input name="pickup" required className="w-full rounded border px-3 py-2" placeholder="Pickup location" />
              <input name="drop" required className="w-full rounded border px-3 py-2" placeholder="Drop location" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input name="type" required className="w-full rounded border px-3 py-2" placeholder="Type of vehicle/machinery" />
              <input name="datetime" type="datetime-local" required className="w-full rounded border px-3 py-2" />
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="rounded-md bg-primary px-5 py-2 text-white">Submit Booking</button>
              <div className="text-sm text-muted-foreground">We respond within 24 hours.</div>
            </div>
          </form>

          {bookingStatus && (
            <div className="mt-4 rounded-md border bg-muted p-4 text-muted-foreground">{bookingStatus}</div>
          )}
        </div>
      </section>

      <section id="contact" className="hm-section bg-muted">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-2xl font-bold">Contact</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground"><a href="tel:+1234567890" className="text-primary underline">+1 234 567 890</a></p>

              <h3 className="mt-4 font-semibold">Email</h3>
              <p className="text-muted-foreground"><a href="mailto:contact@heavymove.example" className="text-primary underline">contact@heavymove.example</a></p>

              <h3 className="mt-4 font-semibold">WhatsApp</h3>
              <p className="text-muted-foreground"><a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-primary underline">Chat on WhatsApp</a></p>

              <h3 className="mt-4 font-semibold">Address</h3>
              <p className="text-muted-foreground">123 Industrial Road, Cityname, Country</p>
            </div>

            <div>
              <h3 className="font-semibold">Map</h3>
              <div className="mt-2 h-48 w-full overflow-hidden rounded border bg-white">
                <iframe title="HeavyMove location" className="h-full w-full" src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
