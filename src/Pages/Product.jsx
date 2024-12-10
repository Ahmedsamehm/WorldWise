import React from 'react'
import img1 from '../assets/DALL·E 2024-11-21 15.04.50 - A captivating image depicting the theme of travel and adventure. The scene includes a vintage suitcase with travel stickers from around the world plac.webp'

export default function Product () {
  return (
    <main className='flex justify-center items-center min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-5'>
        <section className=''>
          <img
            src={img1}
            className='w-full h-auto object-contain md:w-3/4 rounded-lg  mx-auto'
            alt=''
          />
        </section>
        <section className='content-center'>
          <h1 className='text-2xl sm:text-4xl md:text-5xl  font-extrabold  mb-4 capitalize'>
            About WorldWide
          </h1>

          <p className='text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-loose text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum
            harum, quaerat fugit odit asperiores iure quae culpa quos! Debitis
            quis eaque repellat qui unde quia dicta dignissimos, est aliquid.
          </p>
        </section>
      </div>
    </main>
  )
}
