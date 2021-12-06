import React, { useState } from "react";
import { Button } from "primereact/button";
import "./ButtonDemo.css";

export default function FooterPage() {
  return (
    <footer className="absolute bottom-0 flex flex-row justify-between w-full bg-transparent items-center">
      <div className="flex flex-row">
        <div className="button-social">
          <div className="card">
            <div className="template">
              <Button className="whatsapp p-p-0">
                <i className="pi pi-whatsapp p-px-2 text-white ml-0 " />
                <span className="p-px-3 ml-4 font-bold">Whatsapp</span>
              </Button>
              <Button className="instagram p-p-0">
                <i className="pi pi-instagram p-px-2 text-white ml-0 " />
                <span className="p-px-3 ml-4 font-bold">Instagram</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-8 h-8 bg-red-200 rounded-full">
            <i className="pi pi-user text-white text-4xl" style={{'fontSize': '1.5em'}}/>
          </div>
          <div className="flex flex-col ml-2">
            <p className="text-white">Bienvenido/a, Javier</p>
            <div className="flex flex-row cursor-pointer">
              <i className="pi pi-sign-out text-white text-xs" />
              <p className="text-white text-xs px-2 hover:text-red-200 duration-500">
                Cerrar sesión
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-10 h-10 mx-2 bg-red-200 cursor-pointer rounded-full">
          <i className="pi pi-map-marker text-red-700" style={{'fontSize': '1.5em'}}/>
      </div>
    </footer>
  );
}
