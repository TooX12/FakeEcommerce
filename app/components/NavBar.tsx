import React, { useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";
import MobileNavBar from "./MobileNavBar";
import useShowNavigation from "../hooks/useShowNavigation";

function NavBar() {
  const { width, isOpen, setIsOpen, handleTouchStart } = useShowNavigation();

  return (
    <nav className="relative max-w-12xl mx-auto flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg">
      {width && width < 768 && (
        <MobileNavBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          touchStart={handleTouchStart}
        />
      )}
      <div className="w-full flex flex-grow items-center justify-between px-3 sm:px-6">
        <a
          className="text-xl sm:text-2xl basis-0 flex-grow-1 min-w-[4rem] md:min-w-[10rem] text-white font-semibold"
          href="#"
        >
          Fake Ecommerce
        </a>

        <ul className="hidden md:relative md:flex list-style-none flex-grow-0">
          <li className="p-2">
            <a
              className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              Productos
            </a>
          </li>
          <li className="p-2">
            <a
              className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              Hombre
            </a>
          </li>
          <li className="p-2">
            <a
              className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              Mujer
            </a>
          </li>
        </ul>
        <ul className="flex pr-0 basis-0 flex-grow-1 min-w-[4rem] md:min-w-[10rem] justify-end list-style-none">
          <li className="p-1 sm:p-2">
            <a
              className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              <i className="bx bx-cart-alt text-xl sm:text-2xl"></i>
            </a>
          </li>
          <li className="p-1 sm:p-2">
            <a
              className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              <i className="bx bx-heart text-xl sm:text-2xl"></i>
            </a>
          </li>
          <li className="p-1 sm:p-2">
            <a
              className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              <i className="bx bx-user text-xl sm:text-2xl"></i>
            </a>
          </li>
          <li className="p-1 sm:p-2 list-item md:hidden" onClick={setIsOpen}>
            <i className="bx bx-menu text-xl sm:text-2xl text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
