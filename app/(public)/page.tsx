"use client"
import React from 'react';
import Search from "@/components/pages/home";
import HeroSectionStyleEight from "@/components/hero/styleSix";
import Feature from "@/components/features";
import featureData from "@/data/service";
import { ErrorBoundary } from '@sentry/react';


const HomePage = () => {
  
  return (
    <ErrorBoundary fallback={<p>An error has occurred in main component</p>}>
      <HeroSectionStyleEight/>
      <Feature
        classes="section-bg-1"
        servicebtn={false}
        iconTag={true}
        headingClasses="section-subtitle-2"
        data={featureData}
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Core Services",
        }} agencyId={undefined}              />
    </ErrorBoundary>
  )
};

export default HomePage;