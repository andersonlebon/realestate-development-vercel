import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import Script from 'next/script';

const containerStyle = {
  width: '100%',
  height: '100%'
};



const libraries = ["places"];

function MyComponent({ center}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  })
  const { isLoaded: loadingTwo } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  })


  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    ;<Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`} />

   
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
  }, [])

  return isLoaded && loadingTwo ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)