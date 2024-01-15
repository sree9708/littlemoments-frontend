"use client"

import Card from "@/components/Cards/PopularPlace/Card"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaceBySkipAndLimit } from "@/services/Redux/reducers/placeSlice"
import React, { useEffect, useState } from "react"

const Cards: React.FC = () => {
  console.log("Cards rendered") // Add this line

  const dispatch = useAppDispatch()
  const places = useAppSelector(state => state.place.places)

  useEffect(() => {
    if (places.length === 0) {
      console.log("getPlaceBySkipAndLimit")
      dispatch(getPlaceBySkipAndLimit({ skip: 0, limit: 12 }))
    }
  }, [])

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-12 my-12 h-full">
      {places &&
        places.map((place, index) => (
          <Card
            key={index}
            _id={place._id}
            heading={place.category}
            placeName={place.placeName}
            city={place.city}
            image={place.displayImages && place.displayImages[0]}
          />
        ))}
      {places &&
        places.map(place => (
          <Card
            key={place._id}
            _id={place._id}
            // popular={place.popular}
            heading={place.category}
            // rating={place.rating}
            // date={place.date}
            placeName={place.placeName}
            // price={place.price}
            city={place.city}
            // phone={place.phone}
            image={place.displayImages && place.displayImages[0]}
          />
        ))}
      {places &&
        places.map((place, index) => (
          <Card
            key={index}
            _id={place._id}
            // popular={place.popular}
            heading={place.category}
            // rating={place.rating}
            // date={place.date}
            placeName={place.placeName}
            // price={place.price}
            city={place.city}
            // phone={place.phone}
            image={place.displayImages && place.displayImages[0]}
          />
        ))}
      {places &&
        places.map((place, index) => (
          <Card
            key={index}
            _id={place._id}
            // popular={place.popular}
            heading={place.category}
            // rating={place.rating}
            // date={place.date}
            placeName={place.placeName}
            // price={place.price}
            city={place.city}
            // phone={place.phone}
            image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        ))}
      {/* <Card
        popular={true}
        heading="OUTDOOR ACTIVITIES"
        rating="5.0 stars"
        date="October 4, 2023"
        title="Sea Monkeys"
        price="51.00"
        city="Texus, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      <Card
        popular={true}
        heading="Place"
        rating="4.9 stars"
        date="November 2, 2023"
        title="Tsukishima Monja Street"
        price="22.00"
        city="New York, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      {/* <Card
        popular={false}
        heading="OUTDOOR ACTIVITIES"
        rating="5.0 stars"
        date="October 4, 2023"
        title="Sea Monkeys"
        price="51.00"
        city="Texus, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        popular={false}
        heading="OUTDOOR ACTIVITIES"
        rating="4.2 stars"
        date="November 2, 2023"
        title="Big Bottom Boarders"
        price="23.00"
        city="New York, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Card
        popular={true}
        heading="Place"
        rating="4.9 stars"
        date="November 2, 2023"
        title="Tsukishima Monja Street"
        price="22.00"
        city="New York, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Card
        popular={true}
        heading="OUTDOOR ACTIVITIES"
        rating="5.0 stars"
        date="October 4, 2023"
        title="Sea Monkeys"
        price="51.00"
        city="Texus, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        popular={false}
        heading="OUTDOOR ACTIVITIES"
        rating="4.2 stars"
        date="November 2, 2023"
        title="Big Bottom Boarders"
        price="23.00"
        city="New York, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Card
        popular={true}
        heading="Place"
        rating="4.9 stars"
        date="November 2, 2023"
        title="Tsukishima Monja Street"
        price="22.00"
        city="New York, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Card
        popular={false}
        heading="OUTDOOR ACTIVITIES"
        rating="4.2 stars"
        date="November 2, 2023"
        title="Big Bottom Boarders"
        price="23.00"
        city="New York, United States"
        phone="+216 1234 5655"
        image="https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600"
      /> */}
    </div>
  )
}

export default Cards
