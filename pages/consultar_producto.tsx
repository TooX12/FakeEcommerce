import { GetStaticProps } from "next";
import React from "react";
import DashboardLayout from "../app/components/DashboardLayout";
import { Producto } from "../app/ts/producto.interface";

function consultar_producto({ productos }: { productos: Producto[] }) {
  return (
    <DashboardLayout>
      <div className="w-full h-full overflow-x-auto">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="flex flex-col">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Consultar Producto
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Esta información se mostrará públicamente, así que tenga cuidado
                con lo que comparte.
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
                        <a href={`/consultar_producto/${producto.id}`}><i className='bx bx-link-external'></i></a>
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
  );
}

export default consultar_producto;

export const getStaticProps: GetStaticProps = async () => {
  const productos = await fetch("https://fakestoreapi.com/products?limit=5").then(
    (res) => res.json()
  );

  return {
    props: {
      productos: productos,
    },
  };
};
