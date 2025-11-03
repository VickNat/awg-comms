import React from 'react'
import LogoSlider from '../ui/LogoSlider';

const clients = [
    { id: 1, name: "", image: "/logo0.png" },
    { id: 2, name: "", image: "/logo1.png" },
    { id: 3, name: "", image: "/logo2.png" },
    { id: 4, name: "", image: "/logo3.png" },
    { id: 5, name: "", image: "/logo4.png" },
    { id: 6, name: "", image: "/logo5.png" },
    { id: 7, name: "", image: "/logo6.png" },
    { id: 8, name: "", image: "/logo7.png" },
    { id: 9, name: "", image: "/logo8.png" },
    { id: 10, name: "", image: "/logo9.png" },
  ];

const ClientsSection = () => {
  return (
    <div className='relative w-full flex flex-col gap-24 items-center py-32 bg-background'>
        {/* <h2 className='text-5xl '>We Tell Your Brand Story</h2> */}
        <LogoSlider clients={clients} />
    </div>
  )
}

export default ClientsSection