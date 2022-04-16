import { GetStaticProps } from "next";
import React from "react";
import ProductCard from "../app/components/ProductCard";
import { Producto } from "../app/ts/producto.interface";

function joyeria({ productos }: { productos: Producto[] }) {
  const renderProductos = () => {
    return productos.map((producto) => {
      return <ProductCard key={producto.id} producto={producto} />;
    });
  };
  return (
    <section className="bg-slate-50 max-w-12xl mx-auto">
      <div className="w-full h-64 lg:h-80 relative flex flex-col justify-center items-center mb-8 md:mb-10">
        <img
          src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"
          alt="convocatorias.jpg"
          className="w-full h-full object-cover object-center brightness-[65%]"
        />
        <h1 className="text-white text-3xl md:text-4xl font-bold absolute">
        Joyería
        </h1>
      </div>
      <div className="flex flex-wrap pl-5 gap-5">
        {renderProductos()}
      </div>
    </section>
  );
}

export default joyeria;

export const getStaticProps: GetStaticProps = async () => {
  const productos = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  ).then((res) => res.json());

  return {
    props: {
      productos: productos,
    },
  };
};
