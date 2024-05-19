import * as React from "react";
import Image from "next/image";
import imageBG from "../assets/multiImg.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const PreviousWorks = (props: Props) => {
  const PreviousWorks = [
    {
      imgLogo: imageBG,
      ProjectName: "Paramjyoti School Roofing",
      place: "Amalapuram, Andhra Pradesh.",
      area: "30,000 sq.ft",
      timeTaken: "6 Weeks",
    },
    {
      imgLogo: imageBG,
      ProjectName: "Warehouse for VsB agro tech",
      place: "Samarlakota, Andhra Pradesh.",
      area: "22,000 sq.ft",
      timeTaken: "6 Weeks",
    },
    {
      imgLogo: imageBG,
      ProjectName: "Warehouse ",
      place: " Kodangal, Telangana.",
      area: "17,000 sq.ft",
      timeTaken: "8 Weeks",
    },
    {
      imgLogo: imageBG,
      ProjectName: "Warehouse ",
      place: "Gulbarga, Karnataka.",
      area: "16,000 sq.ft",
      timeTaken: "6 Weeks",
    },
    {
      imgLogo: imageBG,
      ProjectName: "Paramjyoti School Roofing",
      place: "Amalapuram, Andhra Pradesh.",
      area: "30,000 sq.ft",
      timeTaken: "6 Weeks",
    },
  ];
  return (
    <div className="lg:pt-[18vh] lg:min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-4">
        <p className="text-3xl font-bold text-center">
        Our Previous Works
        </p>
        <p className="text-lg font-light text-center">We at Pranavi PEB Construction, are actively engaged in the design, engineering, fabrication and erection of pre-engineered metal building systems.</p>
        </div>
        <Carousel
        // plugins={[Autoplay({ delay: 2000 })]}
        className="overflow-hidden lg:overflow-visible"
        // className="max-w-[calc(100vw-140px)] mx-[70px] lg:mx-0 mt-20 lg:mt-0"
      >
        <CarouselContent>
          {PreviousWorks.map((data, index) => (
            <CarouselItem key={index} className="lg:basis-9/12 ">
              <div className="p-1">
                <Card className="h-[68vh] bg-[#dff4ff] rounded-3xl">
                  <CardContent className="flex flex-col-reverse lg:flex-row aspect-video items-center justify-center">
                    <div className="basis-1/2 p-5  text-center lg:text-left">
                      <p className="text-[25px] lg:text-[35px] font-bold">
                        {data.ProjectName}
                      </p>
                      <p className="lg:text-[20px] text-[#737373]">{data.place}</p>
                      <p className="text-[20px] lg:text-[25px] font-bold">{data.area}</p>
                      <p className="lg:text-[20px] text-[#737373] text-center lg:text-justify">The Project took around <span className="text-[20px] text-black font-bold">{data.timeTaken}</span> to complete from start to finsh</p>
                    </div>
                    <div className="basis-1/2 mt-4 lg:mt-0">
                        <Image src={data.imgLogo} alt={data.ProjectName} width={500} height={200} className="rounded-3xl object-cover"/>
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

export default PreviousWorks;
