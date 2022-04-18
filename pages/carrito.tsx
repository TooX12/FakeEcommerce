import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import HeadComponent from "../app/components/HeadComponent";
import useStorage from "../app/hooks/useStorage";
import { CartContext } from "../app/utils/CartContext";

function CarritoPagina() {
  const [productos, setProductos] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState<any>(0);
  const { setItem, getItem } = useStorage();

  const { setCart } = useContext(CartContext);
  let items = getItem("cart", "local");

  useEffect(() => {
    if (items !== undefined) {
      let cartItems = JSON.parse(items);
      setProductos(cartItems);
    }
  }, [items]);

  useEffect(() => {
    if (productos.length > 0) {
      let price = productos.map((producto) => producto.price);
      price = price.reduce((total, price) => total + price);
      setSubTotal(price);
    } else {
      setSubTotal(0);
    }
  }, [productos]);

  const handleRemove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    producto: any
  ) => {
    e.preventDefault();
    let cart: any = [];
    let items = getItem("cart", "local");
    if (items !== undefined) {
      let cartItems = [...JSON.parse(items)];
      cartItems = cartItems.filter((item) => item.id !== producto.id);
      cartItems.map((item) => cart.push(item));
    }
    setItem("cart", JSON.stringify(cart), "local");
    setProductos(cart);
    setCart(cart);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    producto: any
  ) => {
    e.preventDefault();
    let items = getItem("cart", "local");
    if (items !== undefined) {
      let cartItem = [...JSON.parse(items)];
      cartItem = cartItem.filter((item) => item.id === producto.id);
      let price = cartItem[0].price;
      price = parseFloat(e.target.value) * price;
      setSubTotal(price);
    }
  };

  return (
    <>
      <HeadComponent title="Carrito" />
      <section className="max-w-12xl mx-auto">
        <div className="max-w-4xl h-full flex flex-col mx-auto pt-12 pb-6 border-b px-6 border-gray-200">
          <h1 className="text-xl sm:text-4xl text-slate-800 font-bold tracking-tight">
            Carrito
          </h1>
          <div className="mt-2">
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                {productos &&
                  productos.map((producto) => (
                    <li key={producto.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={producto.image}
                          alt={producto.image}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-xs sm:text-base font-medium text-gray-900">
                            <h3>{producto.title}</h3>
                            <p className="ml-4">
                              ${""}
                              {producto.price}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            <i className="bx bxs-star text-amber-400 text-xs "></i>{" "}
                            {producto.rating.rate}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex space-x-2 items-center">
                            <p className="text-gray-500">
                              Cant {producto.quantity}
                            </p>
                            <select
                              defaultValue="1"
                              className="block w-18 px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
                            ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              onChange={(e) => handleChange(e, producto)}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-blue-600 hover:text-blue-500"
                              onClick={(e) => handleRemove(e, producto)}
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 py-12">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$ {subTotal}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Envío e impuestos calculados al finalizar la compra.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Comprar
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link href="/">
                  <a className="font-medium text-blue-600 hover:text-blue-500">
                    Continuar comprando<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarritoPagina;
