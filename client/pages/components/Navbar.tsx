import Image from 'next/image'
import React from 'react'
import logoImg from '../assets/logo.png'
import { Button } from '@/components/ui/button'

type Props = {}

const Navbar = (props: Props) => {
  return (
    // <div className='px-[5vw] h-[15vh] flex justify-between items-center sticky top-0 bg-[#fff5ea]'>
    //   <Image src={logoImg} alt='logo' width={150} className='w-[150px] h-[110px] sm:w-[200px] sm:h-[130px]'/>
    //   <Button variant="primary" className='rounded-xl mr-0 lg:mr-6'>Book an appointment</Button>
    // </div>
    <div className="fixed top-0 left-0 w-full h-15vh z-10 bg-[#fff5ea]">
      <div className="flex items-center justify-between h-full px-4 md:px-8">
        <div className="flex items-center">
          <Image src={logoImg} alt="PRANAVI PEB CONSTRUCTION" width={150} height={60} />
        </div>
        <Button  variant="primary">
          Book Appointment
        </Button>
      </div>
    </div>
  )
}

export default Navbar