import ReactSlider from "react-slider";
import { useState } from "react";

const PriceRange = ({name, value, setValue}) => {


  return (
    <>
      <div className="price_slider_amount">
        <span>Your range:</span>
        <span>{value[0]}K</span>
        <span>-</span>
        <span>{value[1]*10000}K</span>
      </div>

      <ReactSlider
        value={value}
        onChange={setValue}
        className="horizontal-slider"
        name={name}
        thumbClassName="cardealer-thumb"
        trackClassName="cardealer-track"
        renderThumb={(props, state) => <div {...props}  key={state.valueNow}>{state.valueNow}</div>}
      />
    </>
  );
};

export default PriceRange;
