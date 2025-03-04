"use client";
import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  className?: string;
  data: any;
}

export const Hero: React.FC<Props> = ({ className, data }) => {
  return (
    <section
      className={cn("py-16 relative overflow-hidden h-screen", className)}
    >
      <Container className="relative z-10 flex flex-col gap-4 h-full items-center justify-center">
        <Heading className="text-center text-white uppercase">
          {data?.data?.heroTitle}
        </Heading>
        <ReactMarkdown className="text-center text-white !text-xl markdown">
          {data?.data?.heroSubtitle}
        </ReactMarkdown>
        <ContactForm>
          <Button>Contact Us</Button>
        </ContactForm>
      </Container>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3500,
          }),
          Fade({
            active: true,
          }),
        ]}
        opts={{ loop: true }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <CarouselContent className="h-screen">
          {data?.data?.heroImages?.map((slide: any) => (
            <CarouselItem className="w-full h-screen" key={slide.documentId}>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${slide.url}`}
                alt={slide.alt}
                width={1920}
                height={1080}
                className={"w-full h-full object-cover"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute h-full w-full bg-black/30 inset-0 z-[1]"></div>
    </section>
  );
};
