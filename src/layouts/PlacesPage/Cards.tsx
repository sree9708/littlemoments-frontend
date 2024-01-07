"use client"

import Card from "@/components/Cards/PopularPlace/Card"
import React, { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import axios from "axios"

const Cards: React.FC = () => {
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState<any>([])

  useEffect(() => {
    // Fetch initial set of photos
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2fc37d3eb07d07405f0f3f988b07495f&page=${page}`,
      )

      console.log(response.data.results)
      setPhotos((prevPhotos: any) => [...prevPhotos, ...response?.data?.results])
      setPage(page + 1)
    } catch (error) {
      console.error("Error fetching photos:", error)
    }
  }

  return (
    <div className="w-full">
      <InfiniteScroll
        style={{ overflow: "visible" }}
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={true} // Set this to false if you don't have more photos to load
        loader={
          <div className="w-full flex justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        }
      >
        <div className="flex justify-center">
          <div className="w-fit grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-12 my-12">
            {photos.map((photo: any) => (
              <Card
                key={photo.id}
                popular={true}
                heading="Place"
                rating="4.9 stars"
                date="November 2, 2023"
                title={`${photo.title} abcdefghijk`}
                // title={photo.title}
                price="22.00"
                location="New York, United States"
                phone="+216 1234 5655"
                image={`https://image.tmdb.org/t/p/w500${photo.poster_path}`}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Cards

{
  /* <Card popular={false} heading='OUTDOOR ACTIVITIES' rating="5.0 stars" date="October 4, 2023" title="Sea Monkeys" price="51.00" location="Texus, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Card popular={false} heading='OUTDOOR ACTIVITIES' rating="4.2 stars" date="November 2, 2023" title="Big Bottom Boarders" price="23.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={true} heading='Place' rating="4.9 stars" date="November 2, 2023" title="Tsukishima Monja Street" price="22.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={true} heading='OUTDOOR ACTIVITIES' rating="5.0 stars" date="October 4, 2023" title="Sea Monkeys" price="51.00" location="Texus, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Card popular={false} heading='OUTDOOR ACTIVITIES' rating="4.2 stars" date="November 2, 2023" title="Big Bottom Boarders" price="23.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={true} heading='Place' rating="4.9 stars" date="November 2, 2023" title="Tsukishima Monja Street" price="22.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={false} heading='OUTDOOR ACTIVITIES' rating="4.2 stars" date="November 2, 2023" title="Big Bottom Boarders" price="23.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={false} heading='OUTDOOR ACTIVITIES' rating="5.0 stars" date="October 4, 2023" title="Sea Monkeys" price="51.00" location="Texus, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Card popular={false} heading='OUTDOOR ACTIVITIES' rating="4.2 stars" date="November 2, 2023" title="Big Bottom Boarders" price="23.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={true} heading='Place' rating="4.9 stars" date="November 2, 2023" title="Tsukishima Monja Street" price="22.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={true} heading='OUTDOOR ACTIVITIES' rating="5.0 stars" date="October 4, 2023" title="Sea Monkeys" price="51.00" location="Texus, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Card popular={false} heading='OUTDOOR ACTIVITIES' rating="4.2 stars" date="November 2, 2023" title="Big Bottom Boarders" price="23.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={true} heading='Place' rating="4.9 stars" date="November 2, 2023" title="Tsukishima Monja Street" price="22.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card popular={false} heading='OUTDOOR ACTIVITIES' rating="4.2 stars" date="November 2, 2023" title="Big Bottom Boarders" price="23.00" location="New York, United States" phone="+216 1234 5655" image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600" /> */
}
