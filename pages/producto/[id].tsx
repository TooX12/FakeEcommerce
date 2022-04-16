import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Producto } from "../../app/ts/producto.interface";

function producto({ producto }: { producto: Producto }) {
  const { title, price, image, rating, description, category } = producto;
  return (
    <section className="bg-slate-50 max-w-12xl mx-auto">
      <div className="md:h-[calc(80vh-5rem)] lg:h-[calc(100vh-5rem)] max-h-[70rem] min-h-[30rem] flex flex-col md:flex-row items-center px-5 py-5">
        <div className=" hidden w-full sm:w-1/2  sm:h-full rounded-xl bg-white md:flex justify-center items-center">
          <img
            className="w-44 sm:w-5/6 h-44 sm:h-5/6 object-contain"
            src={image}
            alt={`${title}.jpg`}
          />
        </div>
        <div className="w-full md:w-1/2  md:h-full flex flex-col ml-0 md:ml-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-400/90 font-bold tracking-tight uppercase">
            {category}
          </h2>
          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-800 font-bold tracking-tight my-5">
            {title}
          </h3>
          <div className="w-full md:w-1/2  md:h-full rounded-xl bg-white flex md:hidden justify-center items-center">
          <img
            className="w-44 md:w-5/6 h-44 md:h-5/6 object-contain"
            src={image}
            alt={`${title}.jpg`}
          />
        </div>
          <div className="w-full my-3 relative">
            <span className="flex gap-1 text-md sm:text-2xl font-semibold">
              $<p>{price}</p>
              <span>USD</span>
            </span>
            <span className="flex my-2">
              {Array.from(Array(Math.round(rating.rate))).map((_, idx) => (
                <i
                  className="bx bxs-star text-amber-400 text-xs sm:text-lg "
                  key={idx}
                ></i>
              ))}
              {Array.from(Array(5 - Math.round(rating.rate))).map((_, idx) => (
                <i
                  className="bx bxs-star text-slate-300 text-xs sm:text-lg "
                  key={idx}
                ></i>
              ))}
            </span>
          </div>
          <p className="text-xs sm:text-lg font-semibold">{description}</p>
          <button
            type="button"
            className="w-48 sm:w-64 inline-block px-2 py-2.5 sm:px-10 sm:py-4 my-5 sm:my-10 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}

export default producto;

export const getStaticProps: GetStaticProps = async (context) => {
  const producto = await fetch(
    `https://fakestoreapi.com/products/${context.params?.id}`
  ).then((res) => res.json());

  return {
    props: {
      producto: producto,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
