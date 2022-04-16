import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../app/components/Layout";
import useStorage from "../app/hooks/useStorage";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Producto } from "../app/ts/producto.interface";
import { CarritoContext } from "../app/utils/CartContext";

// const {getItem, setItem,removeItem,} = useStorage();
// console.log(getItem);

function MyApp({ Component, pageProps }: AppProps) {
  // const [carrito, setCarrito] = useState([]);
  // const value = useMemo(() => {
  //   console.log(carrito);
  //   return {carrito, setCarrito };
  // }, [carrito]);


  return (
    // <CarritoContext.Provider value={value}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    // </CarritoContext.Provider>
  );
}

export default MyApp;
