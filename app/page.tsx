"use client";

import { slides } from "@/data/heroSlides";
import Slider from "react-slick";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Fade } from "react-awesome-reveal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    infinite: true,
    speed: 1000, // Slower transition for a premium feel
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-0">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="min-h-screen w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover brightness-50 transition-transform duration-6000 hover:scale-110"
                  priority={index === 0}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
          <div className="max-w-4xl space-y-8 text-center">
            <Fade
              direction="up"
              duration={400}
              triggerOnce
              cascade
              damping={0.2}
            >
              <h1 className="text-4xl font-black tracking-tighter uppercase md:text-7xl lg:text-8xl">
                Taste the{" "}
                <span className="text-accent tracking-wide">Extraordinary</span>
              </h1>

              <p className="mx-auto text-lg leading-relaxed text-balance md:text-xl lg:text-2xl">
                Experience the perfect blend of flavors and textures. From
                crispy fries to juicy burgers, every bite is a celebration of
                taste.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href="/menu"
                  buttonType="button"
                  className="rounded-full font-bold tracking-widest uppercase"
                >
                  Explore Menu
                </Button>

                <Button
                  href="/order"
                  buttonType="button"
                  className="rounded-full border-2 border-white bg-transparent font-bold tracking-widest text-white uppercase"
                >
                  Order Online
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* Visual Decor: Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="border-background/30 flex h-10 w-6 justify-center rounded-full border-2 p-1">
          <div className="bg-background h-2 w-1 rounded-full" />
        </div>
      </div>
    </section>
  );
}
