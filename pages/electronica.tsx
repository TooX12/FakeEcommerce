import { GetStaticProps } from "next";
import React from "react";
import ProductCard from "../app/components/ProductCard";
import { Producto } from "../app/ts/producto.interface";

function electronica({ productos }: { productos: Producto[] }) {
  const renderProductos = () => {
    return productos.map((producto) => {
      return <ProductCard key={producto.id} producto={producto} />;
    });
  };
  return (
    <section className="bg-slate-50 max-w-12xl mx-auto">
      <div className="w-full h-64 lg:h-80 relative flex flex-col justify-center items-center mb-8 md:mb-10">
        <img
          src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80"
          alt="convocatorias.jpg"
          className="w-full h-full object-cover object-center brightness-[65%]"
        />
        <h1 className="text-white text-3xl md:text-4xl font-bold absolute">
            Aparatos electrónicos
        </h1>
      </div>
      <div className="flex flex-wrap pl-5 gap-5">
        {renderProductos()}
      </div>
    </section>
  );
}

export default electronica;

export const getStaticProps: GetStaticProps = async () => {
  const productos = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((res) => res.json());

  return {
    props: {
      productos: productos,
    },
  };
};
