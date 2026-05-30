import React from 'react'

const SearchSection = () => {
  return (
<section className=' py-12 '>

    <div className=' max-w-7xl mx-auto px-6 '>
      <div className='grid md:grid-cols-4 gap-4'>
        <input type='text' placeholder='Location' className='border p-3 rounded-lg' />
        <input type='text' placeholder='Property Type' className='border p-3 rounded-lg' />
        <input type='text' placeholder='Budget' className='border p-3 rounded-lg' />

       <button className=' bg-black px-2 py-1 text-white rounded-lg'>Search</button>

      </div>
    </div>
</section>
  )
}

export default SearchSection