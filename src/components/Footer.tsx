import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="QuranAcademy Logo" className="w-14 h-14 object-contain brightness-0 invert" />
              <span className="font-heading font-extrabold text-2xl">QuranAcademy</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6">
              Learn Quran online from certified tutors. Flexible schedules, personalized lessons,
              and expert guidance for all ages and levels.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses#norani-qaida" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Noorani Qaida
                </Link>
              </li>
              <li>
                <Link to="/courses#recitation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Quran Recitation
                </Link>
              </li>
              <li>
                <Link to="/courses#arabic" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Arabic Language
                </Link>
              </li>
              <li>
                <Link to="/courses#hifz" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Hifz (Memorization)
                </Link>
              </li>
              <li>
                <Link to="/courses#tajweed" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tajweed Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">WhatsApp:</p>
                  <a
                    href="https://wa.me/923334136071"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +92 333 413 6071
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:tahirqari178@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground">
                  tahirqari178@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Karachi, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} QuranAcademy. All rights reserved. | Learn Quran Online with Expert Tutors</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
