import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import schoolImg from '../assets/multiImg.png'

type Props = {}

const Services = (props: Props) => {

    const services = [
        {
          title: ' Pre-Engineering Buildings',
          description: ['Duplex houses', 'Convention centers', 'Shopping centers'],
          imgSrc: schoolImg,
        },
        {
          title: 'Warehouses',
          description: ['Duplex houses', 'Convention centers', 'Shopping centers'],
          imgSrc: schoolImg,
        },
        {
          title: 'Specialized Structures',
          description: ['Duplex houses', 'Convention centers', 'Shopping centers'],
          imgSrc: schoolImg,
        },
      ];
    
  return (
    <div className="lg:pt-[20vh] py-5 min-h-screen">
      <div className="container mx-auto px-4">
<div className='flex flex-col justify-center items-center mb-5 gap-2'>
<p className="text-3xl font-bold text-center">Services we offer you</p>
        <p className='lg:w-[800px] text-xl font-light text-center '>We at Pranavi PEB Construction, are activelyengaged in the design, engineering, fabricationand erection of pre-engineered metal buildingsystems</p>
</div>
        <div className="flex flex-col lg:flex-row justify-center gap-[2vh]">
          <div className='flex flex-col gap-[2vh] w-full lg:w-1/2 '>
          {services.slice(0, 2).map((service, index) => (
            <Card key={index} className="w-full flex p-2 lg:p-0 lg:h-[32vh] rounded-3xl bg-[#dff4ff]">
              <div className='basis-1/2 flex flex-col justify-center items-center'>
              <h3 className="text-xl lg:text-3xl lg:px-10 font-bold">{service.title}</h3>
              <ul>
                {service.description.map((item, i) => (
                    <li key={i} className='list-disc list-inside'>{item}</li>
                ))}
              </ul>
              </div>
                <Image src={service.imgSrc} alt={service.title}  width={200} height={200} className='basis-1/2 object-cover lg:p-3 rounded-3xl' />
            </Card>
          ))}
          </div>
          <div className="w-full flex justify-center lg:w-1/2">
            <Card className="w-full lg:h-[66vh] rounded-3xl bg-[#dff4ff]">
              <div className='flex p-2 lg:p-0 flex-row-reverse lg:flex-col'>
              <div className='basis-1/2 flex justify-center items-center'>
              <Image src={services[2].imgSrc} alt={services[2].title}  width={300} height={300} className='lg:h-[32vh] lg:w-full lg:m-5 object-cover rounded-3xl'/>
              </div>
              <div className='basis-1/2 flex flex-col justify-center items-center lg:p-10'>
              <h3 className="text-xl lg:text-3xl lg:px-10 font-bold">{services[2].title}</h3>
              <ul>
                {services[2].description.map((item, i) => (
                  <li key={i} className='list-disc list-inside'>{item}</li>
                ))}
              </ul>
              </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services