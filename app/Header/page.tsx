"use client";

import { cn } from "@/utils/cn";
import { dancing_script } from "@/data/fonts";
import MobileMenu from "./mobile";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "z-9999 h-20 w-full",
        isScrolled && "bg-background/95 shadow-md",
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 lg:px-8">
        <span
          className={cn(
            dancing_script.className,
            "mt-3 text-center text-2xl font-bold",
          )}
        >
          EATS DEMO
        </span>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
