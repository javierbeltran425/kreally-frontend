import React, { useState, useEffect } from "react";

/**
 * Components imports
 */
import GeneralButton from "./GeneralButton";

/**
 * Images imports
 */
import ProductTestImage from "../resources/pixlr-bg-result 1.png";

export default function Display() {
  const [products, setProducts] = useState([]);
  
  return (
    <div className="flex flex-row justify-center items-center w-full h-3/4">
      <div className="flex flex-col items-center w-1/2">
        <h1 className="text-white font-extrabold text-4xl mb-4 text-center">
          Collar de resina y madera
        </h1>
        <p className="text-white p-4 text-justify mb-5">
          Ea sunt nulla reprehenderit duis et Lorem irure in pariatur. Ullamco
          adipisicing sint et eu ea excepteur minim ea ullamco ut consequat et.
          Ad cillum nulla aliquip laborum magna proident sit voluptate non
          incididunt irure fugiat tempor minim. Labore do veniam et anim dolore
          labore non non voluptate quis nostrud nulla commodo qui. Ipsum fugiat
          id exercitation elit ut. Dolor commodo eiusmod voluptate deserunt
          adipisicing reprehenderit laboris esse aliqua. Anim labore nostrud
          aliqua mollit do ea.
        </p>
        <GeneralButton text="Comprar ahora"/>
      </div>
      <div className="flex flex-row justify-center items-center w-1/2">
        <img src={ProductTestImage} className="w-1/2" />
      </div>
    </div>
  );
}
