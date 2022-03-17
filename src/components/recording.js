import React from "react";
import { useContext } from "react";
import { Context } from "../Store";

const Recording = () => {
  const [recording] = useContext(Context);

  return (
    <div className="recording w-full h-8 bg-transparent rounded text-xs font-semibold mb-1 px-1 text-lime-50 overflow-auto z-20">
      {recording}
    </div>
  );
};

export default Recording;
