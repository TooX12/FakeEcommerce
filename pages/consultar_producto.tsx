import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import DashboardLayout from "../app/components/DashboardLayout";
import HeadComponent from "../app/components/HeadComponent";
import { Producto } from "../app/ts/producto.interface";
import { PRODUCTOS } from "../app/utils/apiLinks";
import { Api } from "./api/api";

function ConsultarProductoPagina({ productos }: { productos: Producto[] }) {
  return (
    <>
    <HeadComponent title="Consultar productos" />
      <DashboardLayout>
        <div className="w-full h-full overflow-x-auto">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="flex flex-col">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Consultar Producto
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Esta información se mostrará públicamente, así que tenga
                  cuidado con lo que comparte.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Ver
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Título
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Precio
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Categoría
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((producto) => (
                      <tr key={producto.id} className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {producto.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <Link href={`/consultar_producto/${producto.id}`}>
                            <a>
                              <i className="bx bx-link-external"></i>
                            </a>
                          </Link>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {producto.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {producto.price}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {producto.category}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default ConsultarProductoPagina;

export const getStaticProps: GetStaticProps = async () => {
  let searchParams = new URLSearchParams("limit=5");
  const productos = await Api.getResources(PRODUCTOS, searchParams);

  return {
    props: {
      productos: productos,
    },
  };
};
