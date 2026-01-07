"use client";

import menuData from "@/data/menu";
import HamburgerMenu from "./hamburger";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { socialsData } from "@/data/socials";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(pathname);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    if (!isOpen) document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div>
      <div className="absolute top-2 right-2 z-9999 lg:hidden">
        <HamburgerMenu onclick={toggleMenu} isOpen={isOpen} />
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center gap-8 overflow-hidden font-bold backdrop-blur-2xl"
        >
          {menuData.map((item, index) => (
            <Link
              href={item.href ?? ""}
              key={index}
              className="group cursor-pointer"
            >
              <Fade
                direction="up"
                duration={300}
                delay={isOpen ? index * 80 : 0}
                triggerOnce
              >
                <span
                  className={cn(
                    "text-text/80 cursor-pointer py-3 text-3xl tracking-widest uppercase transition-all duration-200 group-active:scale-105",
                    isActive === item.href ? "text-secondary" : "",
                  )}
                >
                  {item.title}
                </span>

                <div className="bg-secondary h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
              </Fade>
            </Link>
          ))}

          <div className="border-text/20 absolute bottom-5 flex w-full items-center justify-around gap-6 border-t pt-4">
            <Fade
              direction="up"
              duration={300}
              delay={isOpen ? 600 : 0}
              triggerOnce
            >
              {socialsData.map((socials, index) => (
                <Link
                  key={index}
                  href={socials.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/70 cursor-pointer transition-all duration-100 hover:scale-105 active:scale-95"
                >
                  {socials.icon}
                </Link>
              ))}
            </Fade>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
