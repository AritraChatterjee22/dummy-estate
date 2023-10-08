import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import BrokenHouse from '../assets/BrokenHouse.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle'

export default function Listing() {
  SwiperCore.use([Navigation])
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const params = useParams()
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/listing/get/${params.listingId}`)
        const data = await res.json()
        if(data.success === false){
          setError(true)
          setLoading(false)
          return
        }
        setListing(data)
        setLoading(false)
        setError(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchListing()
  },[params.listingId])
  return (
    <main>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
        </div>
        )}
      {error && (
        <div className="flex flex-col justify-center items-center h-screen">
          <img
            src={BrokenHouse}
            alt="Error Image"
            className="w-40 h-auto mb-4"
          />
          <p className="text-center text-2xl">Something went wrong</p>
        </div>
      )}
      {listing && !loading && !error && (
        <>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className='h-[500px]'
                  style={{background: `url(${url}) center no-repeat`, backgroundSize: 'cover' }}>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </main>
  )
}
