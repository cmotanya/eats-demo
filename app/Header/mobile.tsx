"use client";

import menuData from "@/data/menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { socialsData } from "@/data/socials";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./hamburger";
import { Phone, MapPin, ChevronRight, Utensils } from "lucide-react";
import { Button } from "@/components/Button";

const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div>
      <div className="fixed top-5 right-5 z-100 lg:hidden">
        <HamburgerMenu onclick={toggleMenu} isOpen={isOpen} />
      </div>

      {/* Overlay Background */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-all duration-500 ease-in-out",
          isOpen
            ? "bg-text/90 pointer-events-auto backdrop-blur-xl"
            : "backdrop-blur-0 pointer-events-none bg-transparent opacity-0",
        )}
      >
        <nav className="flex h-full flex-col space-y-4 px-8 pt-24 pb-12">
          {/* Main Navigation */}
          <div className="flex flex-col gap-6">
            {menuData.map((item, index) => (
              <Link
                href={item.href ?? ""}
                key={index}
                onClick={closeMenu}
                className="group relative"
              >
                <Fade
                  direction="left"
                  duration={400}
                  delay={isOpen ? index * 50 : 0}
                  triggerOnce
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span
                      className={cn(
                        "text-3xl font-black tracking-tighter uppercase transition-colors",
                        pathname === item.href
                          ? "text-accent"
                          : "text-background",
                      )}
                    >
                      {item.title}
                    </span>
                    <ChevronRight
                      className={cn(
                        "transition-transform duration-300 group-active:translate-x-2",
                        pathname === item.href
                          ? "text-accent"
                          : "text-white/20",
                      )}
                    />
                  </div>
                </Fade>
              </Link>
            ))}
          </div>

          {/* Socials & CTA */}
          <div className="flex items-center justify-between border-white/10">
            <div className="flex gap-8">
              {socialsData.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="hover:text-accent text-white/50 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <Button
              href="/reservations"
              onClick={closeMenu}
              className="bg-accent/50 flex items-center gap-2 rounded-full text-sm font-bold tracking-widest text-white uppercase"
              iconPosition="left"
              icon={<Utensils size={16} />}
            >
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
