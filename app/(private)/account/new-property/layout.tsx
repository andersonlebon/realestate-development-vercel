"use client"
import React from "react";
import { getBaseUrl } from '@/lib/utils';
import { IKContext, IKUpload } from 'imagekitio-react';
import { useLoadScript } from "@react-google-maps/api";
import Loading from '@/components/loadings';


const NewPropertyLayout = ({ children }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <Loading />
  return (
    <>
      {children}
    </>
    
  );
}


export default NewPropertyLayout;