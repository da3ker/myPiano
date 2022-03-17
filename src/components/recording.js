import React from "react";
import { useContext } from "react";
import { Context } from "../Store";

const Recording = () => {
  const [recording] = useContext(Context);

  return (
    <div className="recording w-1/3 h-8 min-w-[200px] bg-transparent rounded text-xs font-semibold m-1 px-1 text-lime-50 overflow-auto z-20">
      {recording}
    </div>
  );
};

export default Recording;
