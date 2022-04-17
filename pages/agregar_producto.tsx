import { useFormik } from "formik";
import React from "react";
import DashboardLayout from "../app/components/DashboardLayout";
import * as Yup from "yup";
import useToggle from "../app/hooks/useToggle";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Este campo es requerido"),
  price: Yup.string().required("Este campo es requerido"),
  description: Yup.string().required("Este campo es requerido"),
  imagen: Yup.string().required("Required"),
});

function Agregar_producto() {
  const [alert, setAlert] = useToggle();

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      imagen: "",
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: any) => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status == 200) {
      setAlert();
      setTimeout(setAlert, 2000);
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full h-full">
        {alert && (
          <div
            className="bg-green-100 rounded-lg py-5 px-6 text-base text-green-700 mb-3"
            role="alert"
          >
            Producto ingresado correctamente
          </div>
        )}
        <div className="">
          <form onSubmit={formik.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Agregar Producto
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Esta información se mostrará públicamente, así que tenga
                    cuidado con lo que comparte.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 space-x-0 md:space-x-4  space-y-4">
                  <div className="md:ml-4 mt-4">
                    <label
                      htmlFor="title"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Título
                    </label>
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="title"
                      placeholder="Ingresa titulo del producto"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? (
                      <div className="text-sm text-red-400 mt-1">
                        {formik.errors.title}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Precio
                    </label>
                    <input
                      type="number"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="price"
                      step=".01"
                      placeholder="Ingresa precio del producto"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      min={0}
                    />{" "}
                    {formik.touched.price && formik.errors.price ? (
                      <div className="text-sm text-red-400 mt-1">
                        {formik.errors.price}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Categoría
                    </label>
                    <select
                      className="form-select  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
      rounded transition ease-in-outm-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                      defaultValue="men's clothing"
                    >
                      <option value="men's clothing">men&#39;s clothing</option>
                      <option value="women's clothing">women&#39;s clothing</option>
                      <option value="electronics">electronics</option>
                      <option value="jewelery">jewelery</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Descripción
                    </label>
                    <textarea
                      className="form-select  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
      rounded transition ease-in-outm-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                      id="description"
                      rows={4}
                      placeholder="Descripción del producto"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                    ></textarea>
                    {formik.touched.description && formik.errors.description ? (
                      <div className="text-sm text-red-400 mt-1">
                        {formik.errors.description}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="Imagen"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Imagen
                    </label>
                    <input
                      className="form-control block w-full  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                      id="imagen"
                      accept="image/*"
                      onChange={formik.handleChange}
                      value={formik.values.imagen}
                    />
                    {formik.touched.imagen && formik.errors.imagen ? (
                      <div className="text-sm text-red-400 mt-1">
                        {formik.errors.imagen}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Agregar_producto;
