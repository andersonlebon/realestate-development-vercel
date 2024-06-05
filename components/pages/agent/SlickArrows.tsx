import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface SlickArrowProps {
  currentSlide: number;
  slideCount: number;
  direction: 'left' | 'right';
  onClick?: () => void;
}

const SlickArrow: React.FC<SlickArrowProps> = ({ currentSlide, slideCount, direction, onClick }) => {
  const isDisabled = direction === 'left' ? currentSlide === 0 : currentSlide === slideCount - 1;
  const ArrowIcon = direction === 'left' ? FaArrowLeft : FaArrowRight;
  const buttonClass = `slick-${direction} slick-arrow${isDisabled ? ' slick-disabled' : ''}`;

  return (
    <button
      className={buttonClass}
      aria-hidden="true"
      aria-disabled={isDisabled}
      type="button"
      onClick={onClick}
    >
      <ArrowIcon />
    </button>
  );
};

export default SlickArrow;
