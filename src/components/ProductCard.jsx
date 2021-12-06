import React from "react";

import ProductImageDemo from "../resources/pixlr-bg-result 1.png";

export default function ProductCard() {
  return (
    <div className="inline-block ">
      <div className="flex flex-col w-40 h-full mx-4 items-center bg-gray-900">
        <img src={ProductImageDemo} className="w-1/2 m-1" />
        <h2 className="text-white text-xs font-bold">
          Collar de resina y madera
        </h2>
        <div className="flex flex-row justify-between items-end w-full h-full overflow-hidden">
          <i
            className="pi pi-shopping-bag p-1 ml-2 mb-2 text-red-200 ring ring-red-200 rounded-full hover:text-white duration-500 cursor-pointer"
            style={{ fontSize: "1rem" }}
          />
          <p className="text-white mb-2 mr-2">$8.00</p>
        </div>
      </div>
    </div>
  );
}
