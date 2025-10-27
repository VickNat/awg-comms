import React from 'react'
import LogoSlider from '../ui/LogoSlider';

const clients = [
    { id: 1, name: "", image: "/file.svg" },
    { id: 2, name: "", image: "/globe.svg" },
    { id: 3, name: "", image: "/next.svg" },
    { id: 4, name: "", image: "/vercel.svg" },
    { id: 5, name: "", image: "/window.svg" },
    { id: 6, name: "", image: "/Logo-bubbles-w.svg"},
    { id: 7, name: "", image: "/file.svg" },
    { id: 8, name: "", image: "/globe.svg" },
  ];

const ClientsSection = () => {
  return (
    <div className='relative w-full flex flex-col gap-24 items-center py-32'>
        <h2 className='text-4xl '>We partner with some incredible brands, take a look.</h2>
        <LogoSlider clients={clients} />
    </div>
  )
}

export default ClientsSection