import React from "react";
import ProductsPage from "../pages/ProductsPage";

import ProductImageDemo from "../resources/pixlr-bg-result 1.png";

/**
 * Components imports
 */
import GeneralButton from "./GeneralButton";

export default function ProductProyector() {
  return (
    <div className="flex flex-row w-full justify-center h-2/5 pt-4 bg-transparent overflow-hidden">
      <div className="flex items-center w-48">
        <img src={ProductImageDemo} />
      </div>
      <div className="flex flex-col w-3/4 justify-center">
        <h1 className="text-white font-bold text-2xl p-4">
          Collar de resina y madera
        </h1>
        <p className="text-white p-4 pb-5 text-xs">
          Nulla proident in elit sint quis. Velit nulla culpa aute proident
          laboris dolore elit amet sunt. Eu ullamco ipsum mollit et ipsum
          reprehenderit voluptate laborum consectetur. Minim deserunt
          exercitation veniam anim voluptate sit reprehenderit Lorem aliqua duis
          enim. Exercitation dolore est adipisicing excepteur tempor sit.
          Excepteur incididunt eiusmod minim elit ut tempor veniam mollit
          occaecat aliquip in. Lorem aliquip sint adipisicing labore
          reprehenderit commodo nisi quis enim cupidatat incididunt quis sunt
          exercitation.
        </p>
        <div className="flex flex-row items-center ml-4">
          <GeneralButton text="Más información" />
          <i
            className="pi pi-shopping-bag p-1 mx-4 text-red-200 ring ring-red-200 rounded-full hover:text-white duration-500 cursor-pointer"
            style={{ fontSize: "1.2rem" }}
          />
        </div>
      </div>
    </div>
  );
}
