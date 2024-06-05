export * from './setCookies';

export const createQueryStrings = (queryParams: {
  [key: string]: string | number | boolean;
}) => {
  // Filter out properties with null values
  if (queryParams !== null) {
    const filteredParams = Object.fromEntries(
      Object.entries(queryParams).filter(
        ([_, value]) => {
          if (value === undefined) return false
          return (value !== '' && value !== 'none') || value
        }
      )
    );
    console.log(filteredParams)
    // Create a query string from the filteredParams object
    const queryString = Object.keys(filteredParams)
      .map((key) => `${key}=${encodeURIComponent(filteredParams[key])}`)
      .join('&');
    return queryString;
  }
  return '';
};

import { FaArrowLeft } from 'react-icons/fa';

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <FaArrowLeft />
  </button>
);

import { FaArrowRight } from 'react-icons/fa';

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <FaArrowRight />
  </button>
);

