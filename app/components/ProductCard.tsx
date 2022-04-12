import React from "react";
import { Producto } from "../ts/producto.interface";

function ProductCard({ producto }: { producto: Producto }) {
  const { title, price, image, rating } = producto;
  return (
    <div className="w-[calc(50%-1.25rem)] md:w-[calc(33.3333333333%-1.25rem)] lg:w-[calc(25%-1.25rem)] xl:w-[calc(20%-1.25rem)] 2xl:w-[calc(16.6666666666666%-1.25rem)] max-h-[36rem] relative">
      <div className="w-full h-64 relative rounded-md bg-white ">
        <img
          className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6"
          src={image}
          alt={`${title}.jpg`}
        />
        <div className="absolute top-0 right-0 p-1 h-8 w-8">
          <i className="bx bxs-heart text-slate-400 text-xl cursor-pointer hover:text-rose-400"></i>
        </div>
        <div className="w-10 h-10 absolute bottom-0 right-0 p-2 rounded-md flex justify-center items-center cursor-pointer bg-black">
          <i className="bx bxs-cart-add text-white text-xl"></i>
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
          {Array.from(Array(5-Math.round(rating.rate))).map((_, idx) => (
            <i className="bx bxs-star text-slate-300" key={idx}></i>
          ))}
        </span>
        <span className="flex gap-1">
          $<p>{price}</p>
          <span>USD</span>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
