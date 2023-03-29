import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className='space-y-5 pt-5'>
        <h1 className='text-4xl font-bold text-center'>Bienvenida/o al sitio oficial</h1>
        <h1 className='text-6xl font-bold text-center'>MNC. Ana Karen Juárez</h1>
        <Image src='/anakarenlogo.png' width={400} height={400} alt='logo' priority
        className='mx-auto'
        />
    </div>
  )
}

export default HomePage