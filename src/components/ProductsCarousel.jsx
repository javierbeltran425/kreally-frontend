import React, { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

export default function ProductsCarousel() {
  return (
    <div className="flex w-full h-2/6 bg-transparent overflow-y-hidden overflow-x-auto">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
