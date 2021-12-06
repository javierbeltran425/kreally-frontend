import React from "react";
import { useNavigate } from "react-router-dom";

import KreallyLogo from "../resources/Logo_Kreally.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-row w-full h-auto bg-transparent justify-between">
      <ul className="flex flex-row text-white items-center justify-center">
        <li className="m-1 px-2 text-red-200 font-bold hover:bg-white duration-500 cursor-pointer rounded-full" onClick={() => navigate('/')}>
          Inicio
        </li>
        <li className="m-1 px-2 text-red-200 font-bold hover:bg-white duration-500 cursor-pointer rounded-full">
          Sobre nosotros
        </li>
        <li className="m-1 px-2 text-red-200 font-bold hover:bg-white duration-500 cursor-pointer rounded-full" onClick={() => navigate('/products')}>
          Productos
        </li>
        <li className="m-1 px-2 text-red-200 font-bold hover:bg-white duration-500 cursor-pointer rounded-full">
          Contacto
        </li>
        <li className="m-1 px-2 text-red-200 font-bold hover:bg-white duration-500 cursor-pointer rounded-full">
          Personalización
        </li>
        <li className="m-1 px-2 text-black bg-red-200 hover:bg-white hover:text-red-200 duration-500 cursor-pointer rounded-full">
          <i className="pi pi-shopping-cart mx-1" /> Mi carrito
        </li>
      </ul>
      <img src={KreallyLogo} className="w-20 h-auto m-3 cursor-pointer" onClick={() => navigate('/')}/>
    </nav>
  );
}
