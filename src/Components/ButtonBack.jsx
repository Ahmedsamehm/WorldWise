import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ButtonBack () {
  const Navigate = useNavigate()
  return (
    <button
      onClick={() => {
        Navigate(-1)
      }}
      className='py-2 px-4 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out rounded-md cursor-pointer flex justify-between text-white'
    >
      Back
    </button>
  )
}
