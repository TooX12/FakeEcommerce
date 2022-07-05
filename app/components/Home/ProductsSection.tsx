import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle";
import { Ordenar } from "../../ts/ordernar.interface";
import { Producto } from "../../ts/producto.interface";
import { filtros } from "../../utils/filtros";
import { ordenar } from "../../utils/ordenar";
import CategoryFiltersComponent from "../CategoryFiltersComponent";
import ProductCard from "../ProductCard";

function ProductsSection({ productos }: { productos: Producto[] }) {
  const renderProductos = () => {
    return listaProductos.map((producto) => {
      return <ProductCard key={producto.id} producto={producto} />;
    });
  };

  const [sortOptions, setSortOptions] = useState<Ordenar[]>(JSON.parse(JSON.stringify(ordenar)));

  const [listaProductos, setListaProductos] = useState(productos);

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

  const [mobileFiltersOpen, setMobileFiltersOpen] = useToggle();
  return (
    <CategoryFiltersComponent
      mobileFiltersOpen={mobileFiltersOpen}
      setMobileFiltersOpen={setMobileFiltersOpen}
      handleSortItems={handleSortItems}
      filtros={filtros}
      sortOptions={sortOptions}
      title="Últimos lanzamientos"
    >
      <div className="flex flex-wrap pl-5 gap-5">{renderProductos()}</div>
    </CategoryFiltersComponent>
  );
}

export default ProductsSection;
