import React from "react";
import DashboardLayout from "../../app/components/DashboardLayout";
import useToggle from "../../app/hooks/useToggle";
import * as Yup from "yup";
import { useFormik } from "formik";
import { GetStaticPaths, GetStaticProps } from "next";
import { Producto, ProductoFormikValues } from "../../app/ts/producto.interface";
import ConfirmationModal from "../../app/components/ConfirmationModal";
import { Api } from "../api/api";
import { PRODUCTOS } from "../../app/utils/apiLinks";
import HeadComponent from "../../app/components/HeadComponent";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Este campo es requerido"),
  price: Yup.string().required("Este campo es requerido"),
  description: Yup.string().required("Este campo es requerido"),
  image: Yup.string().required("Este campo es requerido"),
});

function ConsultarProductoIndividual({ producto }: { producto: Producto }) {
  const [alert, setAlert] = useToggle();
  const [alertDelete, setAlertDelete] = useToggle();
  const [open, setOpen] = useToggle(false);
  const formik = useFormik({
    initialValues: {
      title: producto.title,
      price: producto.price,
      description: producto.description,
      image: "",
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: ProductoFormikValues) => {
    const response = await Api.updateResource(PRODUCTOS, producto.id , values);
    if (response.status == 200) {
      setAlert();
      setTimeout(setAlert, 3000);
    }
  };

  return (
    <>
      <HeadComponent title={`Producto ${producto.id}`} />
      <DashboardLayout>
        <div className="w-full h-full relative">
          {alert && (
            <div
              className="bg-green-100 rounded-lg py-5 px-6 text-base text-green-700 mb-3"
              role="alert"
            >
              Producto modificado correctamente
            </div>
          )}
          {alertDelete && (
            <div
              className="bg-green-100 rounded-lg py-5 px-6 text-base text-green-700 mb-3"
              role="alert"
            >
              Producto eliminado correctamente
            </div>
          )}
          <div className="">
            <form onSubmit={formik.handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Modificar Producto
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
                        defaultValue={producto.category}
                      >
                        <option value="men's clothing">men&#39;s clothing</option>
                        <option value="women's clothing">
                          women&#39;s clothing
                        </option>
                        <option value="electronics">electronics</option>
                        <option value="jewelery">jewelery</option>
                      </select>
                    </div>
                    <div className="">
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
                      {formik.touched.description &&
                      formik.errors.description ? (
                        <div className="text-sm text-red-400 mt-1">
                          {formik.errors.description}
                        </div>
                      ) : null}
                    </div>
                    <div className="">
                      <label
                        htmlFor="Image"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Image
                      </label>
                      <input
                        className="form-control block w-full  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                      transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="file"
                        id="image"
                        accept="image/*"
                        name={formik.values.image}
                        src={formik.values.image}
                        onChange={formik.handleChange}
                        value={formik.values.image}
                      />
                      {formik.touched.image && formik.errors.image ? (
                        <div className="text-sm text-red-400 mt-1">
                          {formik.errors.image}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={setOpen}
                  >
                    Eliminar
                  </button>
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
        <ConfirmationModal open={open} setOpen={setOpen} producto={producto} setAlertDelete={setAlertDelete}/>
      </DashboardLayout>
    </>
  );
}

export default ConsultarProductoIndividual;

export const getStaticProps: GetStaticProps = async (context) => {
  const producto = await Api.getResourceById(PRODUCTOS, context.params?.id)
  return {
    props: {
      producto: producto,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productosRes:any = await Api.getResources(PRODUCTOS);

const paths = productosRes.map((producto: Producto)=> {
  return {
    params:{
      id: `${producto.id}`,
    }
  }
})

  return {
    paths,
    fallback: false, 
  };
};


