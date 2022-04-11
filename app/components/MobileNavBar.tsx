import React, { useState } from "react";

function MobileNavBar({
  isOpen,
  setIsOpen,
  touchStart,
}: {
  isOpen: boolean;
  setIsOpen: VoidFunction;
  touchStart: VoidFunction;
}) {

  return (
    <>
      <div
        className={`${
          isOpen ? "bg-black/10 backdrop-blur-sm" : "bg-black/0"
        } w-full h-[120vh] absolute overflow-hidden top-0 transition-[backdrop-filter] duration-500 ease-in-out`}
        onTouchStart={touchStart}
      ></div>
      <div
        className={`${
          isOpen ? "translate-x-0 " : "translate-x-64"
        } top-0 right-0 fixed h-full w-64 md:w-60 z-20 px-6 bg-white md:hidden flex transition-transform duration-500 ease-in-out `}
      >
        <ul className="w-full list-style-none">
          <li className="p-1 sm:p-2 list-item" onClick={setIsOpen}>
            <span className="flex justify-end">
              <i className="bx bx-x text-xl sm:text-2xl text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"></i>
            </span>
          </li>
          <li className="p-2">
            <a
              className="text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              Productos
            </a>
          </li>
          <li className="p-2">
            <a
              className="text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              Hombre
            </a>
          </li>
          <li className="p-2">
            <a
              className="text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
            >
              Mujer
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNavBar;
