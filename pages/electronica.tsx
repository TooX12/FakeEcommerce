import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import CategoryFiltersComponent from "../app/components/CategoryFiltersComponent";
import HeadComponent from "../app/components/HeadComponent";
import ProductCard from "../app/components/ProductCard";
import useToggle from "../app/hooks/useToggle";
import { Ordenar } from "../app/ts/ordernar.interface";
import { Producto } from "../app/ts/producto.interface";
import { PRODUCTOS_ELECTRONICA } from "../app/utils/apiLinks";
import { filtros } from "../app/utils/filtros";
import { ordenar } from "../app/utils/ordenar";
import { Api } from "./api/api";

function ElectronicaPagina({ productos }: { productos: Producto[] }) {
  const renderProductos = () => {
    return listaProductos.map((producto) => {
      return <ProductCard key={producto.id} producto={producto} />;
    });
  };

  const [listaProductos, setListaProductos] = useState(productos);
  const [sortOptions, setSortOptions] = useState<Ordenar[]>(
    JSON.parse(JSON.stringify(ordenar))
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useToggle();

  const handleSortItems = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    option: Ordenar
  ) => {
    setSortOptions((options) => {
      const optionsData = [...options];
      optionsData.forEach((element) =>
        element.name == option.name
          ? (element.current = true)
          : (element.current = false)
      );
      return optionsData;
    });
  };

  useEffect(() => {
    if (sortOptions[0].current === true) {
      setListaProductos((productos) => {
        const productosData = [...productos];
        productosData.sort(
          (first_product, second_product) =>
            second_product.rating.rate - first_product.rating.rate
        );
        return productosData;
      });
    } else if (sortOptions[1].current === true) {
      setListaProductos((productos) => {
        const productosData = [...productos];
        productosData.sort(
          (first_product, second_product) =>
            first_product.price - second_product.price
        );
        return productosData;
      });
    } else if (sortOptions[2].current === true) {
      setListaProductos((productos) => {
        const productosData = [...productos];
        productosData.sort(
          (first_product, second_product) =>
            second_product.price - first_product.price
        );
        return productosData;
      });
    }
  }, [sortOptions]);
  return (
    <>
      <HeadComponent title="Electrónica" />
      <section className="bg-slate-50 max-w-12xl mx-auto">
        <div className="w-full h-64 lg:h-80 relative flex flex-col justify-center items-center mb-8 md:mb-10">
          <img
            src="electronica.jpg"
            alt="electronica.jpg"
            className="w-full h-full object-cover object-center brightness-[65%]"
          />
          <h1 className="text-white text-3xl md:text-4xl font-bold absolute">
            Aparatos electrónicos
          </h1>
        </div>
        <CategoryFiltersComponent
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          handleSortItems={handleSortItems}
          filtros={filtros}
          sortOptions={sortOptions}
          title="Productos electrónicos"
        >
          <div className="flex flex-wrap pl-5 gap-5">{renderProductos()}</div>
        </CategoryFiltersComponent>
      </section>
    </>
  );
}

export default ElectronicaPagina;

export const getStaticProps: GetStaticProps = async () => {
  const productos = await Api.getResources(PRODUCTOS_ELECTRONICA);

  return {
    props: {
      productos: productos,
    },
  };
};
