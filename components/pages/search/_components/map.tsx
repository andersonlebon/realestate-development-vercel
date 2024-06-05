import React, { useState, useMemo, useCallback, useRef, use, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import Places from "./places";
import Distance from "./distance";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map({position, setMapdataFromParent}: {position: LatLngLiteral, setMapdataFromParent: any}) {
  const [mapdata, setMapdata] = useState<LatLngLiteral>(position);
  const [directions, setDirections] = useState<DirectionsResult>();
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 43.45, lng: -80.49 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  useEffect(() => {
    const { lat, lng } = position;
    if (lat && lng) mapRef.current?.panTo(
      {lat: Number(lat), lng: Number(lng)}
    );
  }, [position]);

  return (
    <div className="w-full h-full">
      <div className="controls">
        <Places
          setMapdata={(position) => {
            setMapdata(position);
            if (position.lat && position.lng)mapRef.current?.panTo(position);
          }}
          setMapdataFromParent={setMapdataFromParent}
        />
        {!mapdata && <p>Enter the address of your property.</p>}
      </div>
      <div className="map">
        <GoogleMap
          zoom={30}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
          
        >
          
        </GoogleMap>
      </div>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

