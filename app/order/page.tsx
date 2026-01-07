"use client";

import { useState } from "react";
import { restaurant, services } from "../../data/orderData";
import { ServiceKey } from "@/utils/types";
import { cn } from "@/utils/cn";
import { BookOpen, ChevronRight, Phone, Star, Store } from "lucide-react";
import { Button } from "@/components/Button";
import { Fade } from "react-awesome-reveal";

const OrderPage = () => {
  const [service, setService] = useState<ServiceKey>("glovo");

  const handleCall = () => {
    window.location.href = `tel:${restaurant.phone}`;
  };

  return (
    <section className="min-h-screen">
      <div className="bg-accent/5 border-b-accent/50 sticky top-0 z-20 border-b p-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Fade
            direction="left"
            duration={200}
            triggerOnce
            cascade
            damping={0.1}
          >
            <h1 className="text-3xl font-bold">Order Hub</h1>
          </Fade>

          <Fade
            direction="right"
            duration={200}
            triggerOnce
            cascade
            damping={0.1}
          >
            <span
              className={cn(
                "rounded-md p-1.5 text-xs font-medium tracking-widest uppercase",
                services[service].color,
                services[service].text,
              )}
            >
              {services[service].name}
            </span>
          </Fade>
        </div>
      </div>

      <div className="space-y-6 p-4">
        <div className="border-text/15 mt-4 space-y-6 rounded-lg border p-6 shadow-md">
          <Fade
            direction="up"
            duration={200}
            delay={300}
            triggerOnce
            cascade
            damping={0.1}
          >
            <div className="flex items-center justify-between">
              <span className="bg-text/5 rounded-2xl p-4">
                <Store className="text-text/70" />
              </span>

              <div className="bg-accent/15 flex items-center rounded-lg p-1.5">
                <div className="flex items-center gap-1">
                  <Star className="text-accent fill-current" size={16} />
                  <span className="text-yellow-700">{restaurant.rating}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-text/70 text-2xl leading-tight font-bold">
                {restaurant.name}
              </h2>
              <p className="text-text/70 mt-1 text-sm font-medium">
                {restaurant.category}
              </p>
            </div>
          </Fade>

          <div>
            <Fade
              direction="up"
              duration={200}
              delay={500}
              triggerOnce
              cascade
              damping={0.1}
            >
              {/* Primary button */}
              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleCall}
                  iconPosition="left"
                  icon={<Phone size={20} className="fill-current" />}
                  className="uppercase"
                >
                  Call Restaurant
                </Button>

                <Button
                  iconPosition="left"
                  href="/menu"
                  icon={<BookOpen />}
                  className="bg-accent/10 border-accent/50 text-text/60 border font-bold uppercase"
                >
                  View Menu
                </Button>
              </div>
            </Fade>
          </div>
        </div>

        {/* Service selection */}
        <div>
          <Fade direction="left" duration={200} delay={600} triggerOnce>
            <h3 className="text-text/80 mb-3 ml-2 text-xl font-bold tracking-widest uppercase">
              Order via Service
            </h3>
          </Fade>

          <div className="space-y-3">
            <Fade
              direction="up"
              duration={200}
              delay={700}
              triggerOnce
              cascade
              damping={0.1}
            >
              {Object.keys(services).map((s) => (
                <Button
                  key={s}
                  onClick={() => setService(s as ServiceKey)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-3xl border-2 p-5 transition-all",
                    service === s
                      ? `${services[s].border} bg-/10 shadow-md ${s === "glovo" ? "ring-yellow-400" : s === "uber" ? "ring-text" : "ring-success"}`
                      : "bg-background text-text/50 border-transparent opacity-60 hover:opacity-100",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "text-background flex size-12 items-center justify-center rounded-md font-bold",
                        services[s].btn,
                      )}
                    >
                      {services[s].name.charAt(0)}
                    </div>

                    <div className="text-left">
                      <p
                        className={cn(
                          "font-bold",
                          service === s ? "text-text/90" : "text-text/50",
                        )}
                      >
                        {services[s].name}
                      </p>

                      <p
                        className={cn(
                          "text-xs",
                          service === s ? "text-text/60" : "text-text/50",
                        )}
                      >
                        Redirect to app
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    size={20}
                    className={cn(
                      service === s ? "text-text/80" : "text-text/30",
                    )}
                  />
                </Button>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
