import React from "react";

function SideBar() {
  return (

      <div className="w-12 lg:w-60 shadow-md bg-white px-1">
        <ul className="relative w-full flex flex-col ">
          <li className="relative w-full">
            <a
              className="flex w-full justify-center lg:justify-start items-center text-sm lg:py-4 lg:px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="/agregar_producto"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <i className='bx bxs-plus-circle lg:mr-3 text-base' ></i>
              <span  className="hidden lg:block">Agregar producto</span>
            </a>
          </li>
          <li className="relative w-full">
            <a
              className="flex w-full justify-center  lg:justify-start items-center text-sm lg:py-4 lg:px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="/consultar_producto"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <i className='bx bx-search lg:mr-3 text-base' ></i>
              <span  className="hidden lg:block">Consultar productos</span>
            </a>
          </li>
        </ul>
      </div>
  );
}

export default SideBar;
