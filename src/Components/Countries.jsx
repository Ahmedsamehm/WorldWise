import React, { useContext } from 'react'
import CountriesList from './CountriesList'
import { AppContext } from '../Contexts/ContextProvider'
import Loading from './Loading'

export default function Countries () {
  const { Cities, isLoading } = useContext(AppContext)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-1'>
            {Cities?.map((city , index) => (
              <CountriesList city={city} key={index} />
            ))}
          </div>

        </>
      )}
    </>
  )
}
