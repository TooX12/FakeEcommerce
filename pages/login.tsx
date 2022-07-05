import Link from "next/link";
import React, { useState } from "react";
import useStorage from "../app/hooks/useStorage";
import { AUTH_LOGIN } from "../app/utils/apiLinks";
import { Api } from "./api/api";
import * as Yup from "yup";
import { useFormik } from "formik";
import { UserFormikValues } from "../app/ts/user.interface";
import useToggle from "../app/hooks/useToggle";
import Router from "next/router";
import HeadComponent from "../app/components/HeadComponent";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Ingresa un usuario"),
  password: Yup.string().required("Ingresa una contraseña"),
});

function Login() {
  const [alert, setAlert] = useToggle();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const { setItem } = useStorage();

  const handleSubmit = async (values: UserFormikValues) => {
    const response = await Api.createResource(AUTH_LOGIN, values);
    if (response.status == 200) {
      const token = await response.json();
      setItem("token", JSON.stringify(token), "local");
      setItem("user-info", JSON.stringify(values.username), "local");
      Router.push("/perfil")
    }
    if (response.status == 401) {
      setAlert();
      setTimeout(setAlert, 10000);
    }
  };
  return (
    <>
    <HeadComponent title="Login"/>
    <section className="max-w-12xl h-[calc(100vh-5rem)] mx-auto">
      {alert && (
        <div
        className="bg-red-100 rounded-lg py-5 px-6 text-base text-red-700 mb-3"
        role="alert"
        >
              Usuario no registrado intenta con el usuario: mor_2314 y contraseña: 83r5^_
            </div>
          )}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="/logo.png"
              alt="Workflow"
              />
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Inicia sesión con tu cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              O{" "}
              <Link href="/">
                <a className="font-medium text-blue-600 hover:text-blue-500">
                  crea una cuenta
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Usuario"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-sm text-red-400 mt-1">
                        {formik.errors.username}
                      </div>
                    ) : null}
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-sm text-red-400 mt-1">
                        {formik.errors.password}
                      </div>
                    ) : null}
                
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                  >
                  Recuerdame
                </label>
              </div>

              <div className="text-sm text-right">
                <Link href="/">
                  <a className="font-medium text-blue-600 hover:text-blue-500">
                    ¿Olvidaste tú contraseña?
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
                </>
  );
}

export default Login;
