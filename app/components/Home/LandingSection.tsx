import React from "react";

function LandingSection() {
  return (
    <section className="max-w-12xl mx-auto">
      <div className="w-full h-[calc(50vh-5rem)] xl:h-[calc(100vh-5rem)] max-h-[70rem] sm:min-h-[30rem] min-h-[20rem] relative flex justify-between items-center p-5">
        <div className="w-1/2 h-full flex flex-col flex-grow justify-center mr-5 ml-auto">
          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold text-slate-800">
            Ecommerce
          </h1>
          <p className="text-md sm:text-3xl lg:text-5xl font-bold my-5 lg:my-10 text-slate-400">
            Descubre lo nuevo de la temporada
          </p>
          <button
            type="button"
            className="w-24 text-center sm:w-48 inline-block px-3 sm:px-6 py-2 border-2 border-gray-800 text-gray-800 font-bold text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Comprar
          </button>
        </div>
        <div className="w-1/2 h-full border-gray-800 border-l-[1rem] md:border-l-[2rem]">
          <img
            src="/landing.jpg"
            alt="convocatorias.jpg"
            className="w-full h-full object-cover brightness-[80%]"
          />
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
