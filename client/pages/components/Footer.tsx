import React from 'react'
import FooterLogo from '../assets/output-onlinepngtools.png'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-[#161c2d]'>
        <Image src={FooterLogo} alt="logo" width={200} height={60} />
    </div>
  )
}

export default Footer