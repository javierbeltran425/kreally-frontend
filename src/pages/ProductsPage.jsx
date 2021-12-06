import React from "react";

/**
 * Components imports
 */
import Navbar from "../components/Navbar";
import ProductProyector from "../components/ProductProyector";
import ProductsCarousel from "../components/ProductsCarousel";
import FooterPage from "../components/FooterPage";

const ProductsPage = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <Navbar />
      <ProductProyector />
      <ProductsCarousel />
      <FooterPage />
    </div>
  );
};

export default ProductsPage;
