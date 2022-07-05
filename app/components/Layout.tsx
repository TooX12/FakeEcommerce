import React, { ReactNode, useReducer } from "react";
import { CartContext, cartReducer,  } from "../utils/CartContext";
import Footer from "./Footer";
import NavBar from "./NavBar/NavBar";



function Layout({ children }: {children:ReactNode}) {
  const [cart, setCart] = useReducer(cartReducer, []);

  return (
      <CartContext.Provider value={{ cart, setCart }}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </CartContext.Provider>
  );
}

export default Layout;
