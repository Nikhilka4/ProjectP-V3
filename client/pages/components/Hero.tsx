import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heroImg from "../assets/hero.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[85vh] mx-[5vw]">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:basis-1/2 h-[35vh] w-full lg:w-[45vw] lg:h-[60vh] flex flex-col justify-center gap-3 lg:gap-5 ml-0 lg:ml-8">
          <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-bold pt-6 lg:pt-0">
            We build Pre-Engineered Buildings
          </h1>
          <p className="w-full lg:w-[600px] text-lg lg:text-xl text-center lg:text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            praesentium. Porro quis soluta vel ut ipsam tenetur officia facere
            obcaecati veritatis laboriosam. Dolore, deserunt dolorum!
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              variant="primary"
              className="rounded-xl w-[400px] lg:w-[250px] lg:text-[18px]"
            >
              Book an appointment
            </Button>
          </div>
        </div>
        <div className="lg:basis-1/2 lg:w-[45vw] pt-6 lg:pt-3">
          <Image
            src={heroImg}
            alt="hero"
            width={500}
            className="w-full lg:w-[600px] h-full lg:h-[410px] object-cover rounded-2xl ml-0 lg:ml-12"
          />
        </div>
      </div>
      <div className="h-[220px] mt-5 lg:h-[15vh] flex flex-col lg:flex-row bg-[#d9d9d9] rounded-2xl px-3 gap-4">
        <div className="basis-1/2 flex justify-evenly items-center">
          <div className="flex justify-center items-center text-center">
            <p className="basis-1/3 text-2xl lg:text-4xl font-bold">8</p>
            <p className="basis-2/3">Years since the start of the company</p>
          </div>
          <div className="flex justify-center items-center text-center">
            <p className="basis-1/3 text-2xl lg:text-4xl font-bold">20+</p>
            <p className="basis-2/3">Years of experience in the field</p>
          </div>
        </div>
        <div className="basis-1/2 flex justify-evenly items-center">
          <div className="flex justify-center items-center text-center">
            <p className="basis-1/3 text-2xl lg:text-4xl font-bold">100+ </p>
            <p className="basis-2/3 w-[150px]"> &nbsp;Projects Completed</p>
          </div>
          <div className="flex  justify-center items-center text-center">
            <p className="basis-1/3 text-2xl lg:text-4xl font-bold">3</p>
            <p className="basis-2/3">Projects Ongoing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="mt-8">
        <div className="h-[15vh] bg-[#d9d9d9] grid grid-cols-4 mx-[70px] rounded-[25px]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#000000] text-[40px] font-bold">8</p>
            <p className="text-[#73767f] text-[18px] font-semibold">
              Years since the start of the company
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#000000] text-[40px] font-bold">20+</p>
            <p className="text-[#73767f] text-[18px] font-semibold">
              Years of experience in the field
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#000000] text-[40px] font-bold">100+</p>
            <p className="text-[#73767f] text-[18px] font-semibold">
              Projects completed
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#000000] text-[40px] font-bold">3</p>
            <p className="text-[#73767f] text-[18px] font-semibold">
              Ongoing projects
            </p>
          </div>
        </div>
      </div> */
}
