"use client";

import { slides } from "@/data/heroSlides";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/Button";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
  };

  return (
    <section className="relative w-full space-y-8 py-8 md:py-24 lg:py-32">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="space-y-4">
          <Fade direction="up" duration={200} triggerOnce cascade damping={0.1}>
            <h1 className="text-center text-4xl font-bold uppercase">
              Welcome to Eats Restaurant
            </h1>
            <p className="px-4">
              Experience the perfect blend of flavors and textures with our
              mouthwatering dishes. From crispy fries to juicy burgers, every
              bite is a celebration of taste.
            </p>
          </Fade>

          <div className="flex w-full justify-center gap-4 px-4">
            <Fade direction="left" duration={200} delay={200} triggerOnce>
              <Button
                href="/menu"
                buttonType="button"
                className="flex w-full items-center justify-center font-semibold tracking-widest uppercase"
              >
                View Menu
              </Button>
            </Fade>
            <Fade direction="right" duration={200} delay={200} triggerOnce>
              <Button
                href="/order"
                buttonType="button"
                className="bg-accent text-text flex w-full items-center justify-center font-semibold tracking-widest uppercase"
              >
                Order Now
              </Button>
            </Fade>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative">
                <div className="aspect-square md:h-175 lg:h-200">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
