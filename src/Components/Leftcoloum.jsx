import React from "react";
import Carditem from "./Carditem";

import Areachart from "./Areachart";

import Tablecomp from "./Table";

function Leftcoloum() {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex  flex-col lg:flex-row gap-2  w-full">
        <Carditem />
        <Carditem />
        <Carditem />
      </div>
      <div className=" flex-auto w-full ">
   <Areachart/>
   <Tablecomp/>
      </div>
    </div>
  );
}

export default Leftcoloum;
