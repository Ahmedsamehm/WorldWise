import React from 'react'
import img1 from '../assets/DALL·E 2024-11-21 15.04.50 - A captivating image depicting the theme of travel and adventure. The scene includes a vintage suitcase with travel stickers from around the world plac.webp'

export default function Price () {
  return (
    <main className="py-8 px-5 flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        <section className=" content-center  px-4  ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold  mb-4 capitalize">
            simple pricing just $9/month
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-loose text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum
            harum, quaerat fugit odit asperiores iure quae culpa quos! Debitis
            quis eaque repellat qui unde quia dicta dignissimos, est aliquid.
          </p>
        </section>
        <section className="p-3 col-auto">
          <img
            src={img1}
            className="w-full h-auto object-contain md:w-3/4 rounded-lg  mx-auto"
            alt=""
          />
        </section>
      </div>


    </main>
  );
}
