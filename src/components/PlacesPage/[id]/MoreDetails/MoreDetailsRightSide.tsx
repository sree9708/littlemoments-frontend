import React, { useState, useRef, useCallback, useEffect } from "react"
import { GoogleMap, useLoadScript, Marker, Autocomplete, StandaloneSearchBox } from "@react-google-maps/api"
import { Library } from "@googlemaps/js-api-loader"
import axios from "axios"

// type Library = 'places' | 'drawing' | 'geometry' | 'localContext' | 'visualization';
const libraries: Library[] = ["places"]

const mapContainerStyle = {
  height: "100%",
  width: "100%",
}

const center = {
  lat: 59.95,
  lng: 30.33,
}

interface MarkerType {
  lat: number
  lng: number
}

const MoreDetailsRightSide: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  })

  const [marker, setMarker] = useState<MarkerType | null>(center as MarkerType | null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude
          const long = position.coords.longitude
          console.log("Latitude: ", lat, "Longitude: ", long)
        },
        error => {
          console.log("Error: ", error)
        },
      )
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
    console.log("env : ", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
  }, [])

  const onMapClick = useCallback((event: any) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    })
  }, [])

  const mapRef = useRef<any | null>(null)
  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map
  }, [])

  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null)

  if (loadError) return <div>Error loading maps</div>
  if (!isLoaded) return <div>Loading Maps</div>

  return (
    <div className="sm:col-span-4">
      <Autocomplete>
        <input type="text" placeholder="Search " />
      </Autocomplete>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        // options={{ disableDefaultUI: true }}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {marker && (
          <Marker key={`${marker.lat}-${marker.lng}`} position={{ lat: marker.lat, lng: marker.lng }} />
        )}
      </GoogleMap>

      <p>
        Selected location: {marker?.lat}, {marker?.lng}
      </p>
    </div>
  )
}

export default MoreDetailsRightSide
