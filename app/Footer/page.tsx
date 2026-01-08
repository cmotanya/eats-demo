import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  UtensilsCrossed,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text text-background/60 pt-16 pb-8 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Story */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <UtensilsCrossed className="text-accent" size={28} />
              <h2 className="text-2xl font-black tracking-tighter uppercase">
                Eats<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Experience culinary excellence where every dish tells a story of
              tradition, innovation, and passion for local ingredients.
            </p>
            <div className="flex gap-5 text-neutral-500">
              <Link
                href="#"
                className="hover:text-accent transform transition-all hover:-translate-y-1"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-accent transform transition-all hover:-translate-y-1"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-accent transform transition-all hover:-translate-y-1"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xs font-bold tracking-[0.2em] text-white uppercase">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {["Our Menu", "Book a Table", "Our Story", "Gift Cards"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <ChevronRight
                        size={14}
                        className="text-accent -ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
                      />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xs font-bold tracking-[0.2em] text-white uppercase">
              Locate Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="leading-relaxed">
                  First Street,
                  <br />
                  Nyali, Mombasa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+254 712 909 475</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-6 text-xs font-bold tracking-[0.2em] text-white uppercase">
              Opening Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-accent shrink-0" />
                <div className="w-full space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Thu</span>
                    <span className="text-white">11:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Fri - Sat</span>
                    <span>11:00 - 23:30</span>
                  </div>
                  <div className="text-accent flex justify-between font-medium">
                    <span>Sunday</span>
                    <span>12:00 - 21:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-[10px] font-medium tracking-[0.15em] uppercase md:flex-row">
          <p className="text-neutral-500">
            © 2026 EATS RESTAURANT GROUP.{" "}
            <span className="mx-2 hidden md:inline">|</span> DESIGNED FOR
            FOODIES.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
