import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-primary">
              ConstructRent Pro
            </h3>
            <p className="text-white/70 leading-relaxed">
              Leading provider of construction equipment rental and material
              transport services. Trusted by contractors across the region for
              reliable, professional service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#vehicles"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Our Fleet
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-white">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-white/70">Equipment Rental</li>
              <li className="text-white/70">Material Transport</li>
              <li className="text-white/70">Labour Supply</li>
              <li className="text-white/70">Site Equipment</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-white">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9327264950"
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>9327264950</span>
              </a>
              <a
                href="mailto:info@constructrent.com"
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@constructrent.com</span>
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Construction Avenue, Industrial Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} ConstructRent Pro. All rights reserved.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
