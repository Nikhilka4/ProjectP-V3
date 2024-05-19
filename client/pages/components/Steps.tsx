import Image from "next/image";
import React from "react";
import constructImg from "../assets/construct.jpg";

type Props = {};

const Steps = (props: Props) => {
  return (
    <div className="py-8 lg:pt-[20vh] lg:min-h-screen">
      <div className="container mx-auto px-4">
        <div className="lg:mb-10">
          <p className="text-3xl font-bold text-center mb-3">How we Work?</p>
          <p className="text-lg font-light text-center">
            The three simple stages that comprise our entire procedure of
            offering you our services
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between py-4 lg:py-8 px-8">
          <div className="flex flex-col space-y-4 lg:px-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 lg:w-10 h-8 lg:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-[12px] lg:text-[1rem] m-3 lg:m-0 font-bold">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-2xl pt-8 lg:pt-6 font-bold">
                  Book an appointment
                </h3>
                <p className="text-gray-600">
                  The process within 24-48 hours after booking the appointment
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 lg:w-10 h-8 lg:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-[12px] lg:text-[1rem] m-3 lg:m-0 font-bold">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-2xl pt-8 lg:pt-6 font-bold">
                  We handle everything
                </h3>
                <p className="text-gray-600">
                  With professional approach at every step of project, like
                  Design, Raw materials, Roofing Accessories etc.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 lg:w-10 h-8 lg:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-[12px] lg:text-[1rem] m-3 lg:m-0 font-bold">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-2xl pt-8 lg:pt-6 font-bold">
                  Building Ready
                </h3>
                <p className="text-gray-600">
                  We use advanced techniques to deliver our services on time.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block mt-8 lg:mt-0">
            <Image
              src={constructImg}
              alt="Building"
              width={500}
              height={300}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
