import React from 'react';
import Slider from 'react-slick';
import PropertyItem from '@/components/product/property';
import SlickArrow from './SlickArrows';

interface Property {
  id: number;
  // Other property fields...
}

interface AgentPropertiesSliderProps {
  properties: Property[];
}

const AgentPropertiesSlider: React.FC<AgentPropertiesSliderProps> = ({ properties }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrow direction="left" currentSlide={0} slideCount={properties.length} />,
    nextArrow: <SlickArrow direction="right" currentSlide={0} slideCount={properties.length} />,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="ltn__product-slider-item-four-active-full-width slick-arrow-1">
      {properties.map((property) => (
        <PropertyItem key={property.id} property={property} baseUrl="/properties" />
      ))}
    </Slider>
  );
};

export default AgentPropertiesSlider;
