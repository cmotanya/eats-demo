"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/Button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="bg-accent/10 relative min-h-dvh pt-12 text-center">
      <div className="text-accent/30 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11rem] font-bold md:text-[15rem]">
        404
      </div>

      <div>
        <Fade direction="down" duration={200}>
          <Image
            src="/not-found.svg"
            alt="not-found illustration image showing a person looking for a page that doesn't exist"
            width={500}
            height={500}
            className="mb-4 h-full w-full object-contain"
          />
        </Fade>
        <div className="flex w-full flex-col items-center gap-4 lg:max-w-4xl">
          <Fade
            direction="up"
            duration={200}
            delay={300}
            triggerOnce
            cascade
            damping={0.1}
          >
            <h1 className="text-text/50 text-4xl font-bold lg:text-6xl">
              Page Unavailable!
            </h1>
            <p className="font-medium lg:text-xl">
              {" "}
              The page you&apos;re looking for doesn&apos;ts exist.
            </p>
          </Fade>

          <Fade direction="right" duration={200} delay={500} triggerOnce>
            <Button
              onClick={() => router.push("/")}
              buttonType="button"
              iconPosition="left"
              icon={<ArrowLeft size={16} />}
              className="border-primary gap-2 border-2 font-medium uppercase"
            >
              Go Back
            </Button>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
