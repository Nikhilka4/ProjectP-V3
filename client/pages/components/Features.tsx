import { Card } from '@/components/ui/card'
import Image from 'next/image';
import React from 'react'
import onTimeImg from '../assets/on-time-icon.png'
import qualityControlImg from '../assets/quality-control.png'
import lowCostImg from '../assets/low-cost.png'

type Props = {}

const Features = (props: Props) => {
  const features = [
    {
      title: 'Low cost',
      description: 'Utilize resources, and leverage technology to the maximum. They are easy to set up, expand & modify.',
      imgSrc: lowCostImg,
    },
    {
      title: 'Quality Control',
      description: 'Products are inspected at all stages of fabrication for welding quality, dimensional tolerances, surface preparation etc.',
      imgSrc: qualityControlImg,
    },
    {
      title: 'On time Delivery',
      description: 'With Quick design capabilities and advanced techniques we deliver our services on time.',
      imgSrc: onTimeImg,
    },
  ];
  // return (
    // <div className="h-[100vh] mx-[5vw] mt-[340px] lg:mt-0 pt-[15vmin]">
    //     <div className='mt-10 flex flex-col items-center justify-center gap-3'>
    //         <p className='text-[#fb503f] text-4xl font-light'>More than just</p>
    //         <p className='text-5xl font-light'>Steel Structures</p>
    //     </div>
    //     <div></div>
    // </div>
    return (
      <div className="lg:pt-[20vh] py-8 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-[#fb503f]">More than just</h2>
          <p className="text-3xl font-normal"> Steel Structures</p>
          <p className="text-xl mt-3">WE DELIVER A COMPLETE BUILDING SOLUTIONS WITH</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="w-full lg:w-1/3 mb-4 lg:mb-0 p-5 bg-[#dff4ff] rounded-2xl">
              <Image src={feature.imgSrc} alt={feature.title} width={500} height={300} className='w-full h-[200px] object-contain m-3' />
              <h3 className="text-xl font-bold text-center mb-2">{feature.title}</h3>
              <p className='text-md text-center'>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Features