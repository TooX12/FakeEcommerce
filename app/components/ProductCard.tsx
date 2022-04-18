import Link from "next/link";
import React, { useContext } from "react";
import useStorage from "../hooks/useStorage";
import { Producto } from "../ts/producto.interface";
import { CartContext } from "../utils/CartContext";

function ProductCard({ producto }: { producto: Producto }) {
  const { id, title, price, image, rating } = producto;

  const { setItem, getItem } = useStorage();

  const {setCart} = useContext(CartContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let cart = [];
    let items = getItem("cart", "local");
    if (items !== undefined) {
      let cartItems = [...JSON.parse(items)];
      cartItems = cartItems.filter((item) => item.id !== producto.id);
      cartItems.map((item) => cart.push(item));
    }
    cart.push(producto);
    setItem("cart", JSON.stringify(cart), "local");
    setCart(producto);
  };
  

  return (
    <div className="w-[calc(50%-1.25rem)] md:w-[calc(33.3333333333%-1.25rem)] lg:w-[calc(25%-1.25rem)] max-h-[36rem] cursor-pointer relative">
      <button className="w-10 h-10 absolute z-10 top-0 translate-y-[9.5rem] sm:translate-y-[13.5rem] lg:translate-y-[7.5rem] xl:translate-y-[9.5rem] 2xl:translate-y-[13.5rem] right-0 p-2 rounded-md flex justify-center items-center cursor-pointer bg-black"
      onClick={handleSubmit}>
        <i className="bx bxs-cart-add text-white text-xl"></i>
      </button>
      <Link href={`/producto/${id}`}>
        <a>
          <div className="w-full h-48 sm:h-64 lg:h-40 xl:h-48 2xl:h-64 relative rounded-md bg-white ">
            <img
              className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6"
              src={image}
              alt={`${title}.jpg`}
            />
            <div className="absolute top-0 right-0 p-1 h-8 w-8">
              <i className="bx bxs-heart text-slate-400 text-xl cursor-pointer hover:text-rose-400"></i>
            </div>
          </div>
          <div className="w-full my-2 relative">
            <p className="font-semibold text-sm whitespace-nowrap overflow-ellipsis overflow-hidden">
              {title}
            </p>
            <span className="flex my-2">
              {Array.from(Array(Math.round(rating.rate))).map((_, idx) => (
                <i className="bx bxs-star text-amber-400" key={idx}></i>
              ))}
              {Array.from(Array(5 - Math.round(rating.rate))).map((_, idx) => (
                <i className="bx bxs-star text-slate-300" key={idx}></i>
              ))}
            </span>
            <span className="flex gap-1">
              $<p>{price}</p>
              <span>USD</span>
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default ProductCard;
