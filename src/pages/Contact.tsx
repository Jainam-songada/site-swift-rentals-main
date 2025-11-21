import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
        <p className="mb-4 text-muted-foreground">Have questions? Reach out via phone or WhatsApp.</p>
        <div className="space-y-2">
          <p className="text-sm">Phone: <a href="tel:+1234567890" className="text-primary underline">+1 234 567 890</a></p>
          <p className="text-sm">WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-primary underline">Chat with us</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
