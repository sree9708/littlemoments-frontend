export const runtime = 'edge';

import Main from '@/layouts/PlacesPage/[id]/Main'
import React from 'react'

// export async function generateStaticParams() {
//   // Fetch MongoDB _id values from your database
//   const placeIds = await getPlaces({skip:0, limit:20}); // Implement this function to fetch IDs from MongoDB
//   if(!placeIds){
//     throw new Error("PLaces not available")
//   }
//   const paths = placeIds.map((id: any) => ({ params: { id: id.toString() } })); // Convert ObjectId to string

//   return paths;
// }
const page = () => {

  return (
    <div><Main /></div>
  )
}

export default page