import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heroImg from "../assets/hero.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    // <div className="h-[85vh] mx-[5vw]">
    //   <div className="flex flex-col lg:flex-row">
    //     <div className="lg:basis-1/2 h-[35vh] w-full lg:w-[45vw] lg:h-[60vh] flex flex-col justify-center gap-3 lg:gap-5 ml-0 lg:ml-8">
    //       <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-bold pt-6 lg:pt-0">
    //         We build Pre-Engineered Buildings
    //       </h1>
    //       <p className="w-full lg:w-[600px] text-lg lg:text-xl text-center lg:text-justify">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
    //         praesentium. Porro quis soluta vel ut ipsam tenetur officia facere
    //         obcaecati veritatis laboriosam. Dolore, deserunt dolorum!
    //       </p>
    //       <div className="flex justify-center lg:justify-start">
    //         <Button
    //           variant="primary"
    //           className="rounded-xl w-[400px] lg:w-[250px] lg:text-[18px]"
    //         >
    //           Book an appointment
    //         </Button>
    //       </div>
    //     </div>
    //     <div className="lg:basis-1/2 lg:w-[45vw] pt-6 lg:pt-3">
    //       <Image
    //         src={heroImg}
    //         alt="hero"
    //         width={500}
    //         className="w-full lg:w-[600px] h-full lg:h-[410px] object-cover rounded-2xl ml-0 lg:ml-12"
    //       />
    //     </div>
    //   </div>
    //   <div className="h-[220px] mt-5 lg:h-[15vh] flex flex-col lg:flex-row bg-[#d9d9d9] rounded-2xl px-3 gap-4">
    //     <div className="basis-1/2 flex justify-evenly items-center">
    //       <div className="flex justify-center items-center text-center">
    //         <p className="basis-1/3 text-2xl lg:text-4xl font-bold">8</p>
    //         <p className="basis-2/3">Years since the start of the company</p>
    //       </div>
    //       <div className="flex justify-center items-center text-center">
    //         <p className="basis-1/3 text-2xl lg:text-4xl font-bold">20+</p>
    //         <p className="basis-2/3">Years of experience in the field</p>
    //       </div>
    //     </div>
    //     <div className="basis-1/2 flex justify-evenly items-center">
    //       <div className="flex justify-center items-center text-center">
    //         <p className="basis-1/3 text-2xl lg:text-4xl font-bold">100+ </p>
    //         <p className="basis-2/3 w-[150px]"> &nbsp;Projects Completed</p>
    //       </div>
    //       <div className="flex  justify-center items-center text-center">
    //         <p className="basis-1/3 text-2xl lg:text-4xl font-bold">3</p>
    //         <p className="basis-2/3">Projects Ongoing</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="pt-[20vh] pb-8 bg-gray-100 min-h-screen">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">We build Pre-Engineered Buildings</h1>
          <p className="mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
             praesentium. Porro quis soluta vel ut ipsam tenetur officia facere
             obcaecati veritatis laboriosam. Dolore, deserunt dolorum!</p>
          <Button variant="primary">Book an appointment</Button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 ">
          <Image src={heroImg} alt="Building" width={500} height={300} className="ml-0 lg:ml-40 rounded-3xl"/>
        </div>
      </div>
      <div className="h-[150px] lg:h-[15vh] flex flex-wrap justify-evenly items-center mt-8 bg-[#d9d9d9] rounded-3xl px-3">
        <div className="w-1/2 lg:w-auto lg:mr-8 mb-4 lg:mb-0"><span className="text-2xl lg:text-4xl font-bold">8</span> Years in Business</div>
        <div className="w-1/2 lg:w-auto lg:mr-8 mb-4 lg:mb-0"><span className="text-2xl lg:text-4xl font-bold">20</span><span className="text-xl lg:text-2xl font-bold">+</span> Years of Expertise in the field</div>
        <div className="w-1/2 lg:w-auto  lg:mr-8"><span className="text-2xl lg:text-4xl font-bold">100</span><span className="text-xl lg:text-2xl font-bold">+</span> Projects Completed</div>
        <div className="w-1/2 pl-2 lg:w-auto"><span className="text-2xl lg:text-4xl font-bold">3</span> Ongoing Projects</div>
      </div>
    </div>
  </div>
  );
};

export default Hero;
