import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { Space, Flex } from 'antd';

import { useState } from 'react';

function valuetext(value: number) {
  return `${value}°C`;
}

const PrettoSlider = styled(Slider)({
  color: '#B4A852',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#B4A852',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const  RangeSlider = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };


  

  return (
    <Flex align='center' className='min-w-[500px]' gap={10}>
      <Flex className='w-[150px]'>
        Price range{`($k)`}
      </Flex>
      <PrettoSlider
        valueLabelDisplay="auto"
        defaultValue={20}
        min={0}
        max={100}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        aria-label="Always visible"
        getAriaValueText={valuetext}
      />
    </Flex>
  );
}

export default RangeSlider;
