"use client";
import React from "react";
import imageBG from "../assets/Oval.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Props = {};

const Testimonials = (props: Props) => {
  const Testimonials = [
    {
      imgLogo: imageBG,
      description:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
      name: "Isabella Chovez",
      occupation: "Graphic Designer",
    },
    {
      imgLogo: imageBG,
      description:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
      name: "Isabella Chovez",
      occupation: "Graphic Designer",
    },
    {
      imgLogo: imageBG,
      description:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
      name: "Isabella Chovez",
      occupation: "Graphic Designer",
    },
    {
      imgLogo: imageBG,
      description:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
      name: "Isabella Chovez",
      occupation: "Graphic Designer",
    },
    {
      imgLogo: imageBG,
      description:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
      name: "Isabella Chovez",
      occupation: "Graphic Designer",
    },
  ];
  return (
    <div className="lg:pt-[20vh] py-8 bg-white lg:min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <p className="text-3xl font-bold text-center mb-3">
            What people say about us
          </p>
          <p className="text-lg font-light text-center">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="max-w-[calc(100vw-140px)] mx-[70px]"
        >
          <CarouselContent>
            {Testimonials.map((data, index) => (
              <CarouselItem key={index} className=" lg:basis-1/2 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-video">
                      <div className="basis-1/3 items-start mt-7">
                        <Image
                          src={data.imgLogo}
                          alt="client"
                          width={70}
                          height={70}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-[20px] font-bold">
                          {data.description}
                        </p>
                      </div>
                      <div className="flex  justify-end mt-5 font-semibold italic">
                        -{data.name}, {data.occupation}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
