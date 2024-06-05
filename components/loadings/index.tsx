import React from "react";
import { FadeLoader } from "react-spinners";



function Loading() {

  return (
    <div className="sweet-loading fixed z-[999] top-0 left-0 bg-[#ffffffc9] w-full h-full flex items-center justify-center">
     <FadeLoader
            color="#B4A852"
            cssOverride={{}}
            height={15}
            loading
            margin={5}
            radius={0}
            width={5}
          />
    </div>
  );
}

export default Loading