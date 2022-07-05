import React, { useEffect, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import useShowNavigation from "../../hooks/useShowNavigation";
import { links } from "../../utils/links";
import Link from "next/link";
import useStorage from "../../hooks/useStorage";

function NavBar() {
  const { width, isOpen, setIsOpen, handleTouchStart } = useShowNavigation();
  const { getItem } = useStorage();
  const [count, setCount] = useState(0);

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    let items = getItem("cart", "local");
    if (items !== undefined) {
      let cartItems = [...JSON.parse(items)];
      setCount(cartItems.length);
    }

    let userAuth = getItem("user-info", "local");
    if(userAuth !== undefined){
      setAuth(true)
    }else{
      setAuth(false)
    }

  });

  return (
    <nav className="h-20 sticky top-0 z-20 max-w-12xl mx-auto flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg">
      {width && width < 768 && (
        <MobileNavBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          touchStart={handleTouchStart}
        />
      )}
      <div className="w-full flex flex-grow items-center justify-between px-3 sm:px-6">
        <Link href="/">
          <a className="text-xl sm:text-2xl basis-0 flex-grow-1 min-w-[5rem] md:min-w-[10rem] lg:min-w-[15rem] text-white font-semibold">
            Ecommerce
          </a>
        </Link>

        <ul className="hidden md:relative md:flex list-style-none flex-grow-0">
          {links.map((link) => (
            <li className="p-2" key={link.href}>
              <Link href={link.href}>
                <a className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0">
                  {link.nombre}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex pr-0 basis-0 flex-grow-1 min-w-[5rem] md:min-w-[10rem] lg:min-w-[15rem] justify-end list-style-none">
          <li className="p-1.5 sm:p-2">
            <Link href="/carrito">
              <a className="text-white relative opacity-60 hover:opacity-80 focus:opacity-80 p-0">
                <i className="bx bx-cart-alt text-2xl"></i>
                {count > 0 && (
                  <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold text-gray-700 bg-white rounded-full z-10">
                    {count}
                  </div>
                )}
              </a>
            </Link>
          </li>
          <li className="p-1.5 sm:p-2">
            <Link href="/">
              <a className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0">
                <i className="bx bx-heart text-2xl"></i>
              </a>
            </Link>
          </li>
          <li className="p-1.5 sm:p-2">
            <Link href={`${auth?"/perfil" : "/login"}`}>
              <a
                className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              >
                <i className="bx bx-user text-2xl"></i>
              </a>
            </Link>
          </li>
          <li className="p-1 sm:p-2 list-item md:hidden" onClick={setIsOpen}>
            <i className="bx bx-menu text-2xl text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
