import React from 'react'
import Button from '../common/Button'

const HeroSection = () => {
  return (
    
    <section className=' max-w-7xl  mx-auto px-6 py-20 bg-red '>
        <div className='flex flex-col items-center text-center  gap-4'>
            <h1 className='text-5xl font-bold '>Find Your Dream Rental Home</h1>
            <p className='text-gray-700 italic max-w-2xl '>Browse verified properties, connect directly with owners, and rent with confidence.</p>
            <div className='flex gap-5'> 
                <Button className='py-5 px-8' text={'Browse Property'}/>
                <Button className='bg-blue-700 py-5 px-8' text={'Browse Property'}/>


            </div>
        </div>
    </section>
  )
}

export default HeroSection