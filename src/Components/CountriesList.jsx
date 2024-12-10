import React from 'react'

export default function CountriesList ({ city, index }) {
  return (
    <div key={index}>
      <div className='bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer text-white rounded-lg shadow-md hover:shadow-lg  p-4  content-center items-center gap-4'>
        <span className='text-4xl'>{city?.flag}</span>

        <div className='text-center'>
          <h2 className='text-lg font-bold'>{city?.name}</h2>
          <p className='text-sm text-gray-400'>{city?.country}</p>
        </div>
      </div>
    </div>
  )
}
