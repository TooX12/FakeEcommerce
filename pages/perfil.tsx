import { GetStaticProps } from "next";
import { redirect } from "next/dist/server/api-utils";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import HeadComponent from "../app/components/HeadComponent";
import useStorage from "../app/hooks/useStorage";
import { User } from "../app/ts/user.interface";
import { USUARIOS } from "../app/utils/apiLinks";
import { Api } from "./api/api";

function PerfilPagina({ usuarios }: { usuarios: User[] }) {
  const [user, setUser] = useState<User>(usuarios[0]);
  const { getItem, removeItem } = useStorage();
  const { name, email, address, phone } = user;
  
  useEffect(() => {
    let user_local = getItem("user-info", "local");
    user_local = user_local.replace(/["]/g, "");
    let userTemp = usuarios.filter((user) => user.username == user_local);
    setUser(userTemp[0]);
  }, [usuarios, getItem]);

  const handleRemove = () => {
    removeItem("user-info", "local")
    removeItem("token", "local")
    Router.push("/login")
  }

  return (
    <>
    <HeadComponent title="Perfil"/>
    <section className="max-w-12xl mx-auto">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="flex justify-between">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Información del usuario
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Datos personales
            </p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <button
              type="button"
              className="w-24 text-center sm:w-40 inline-block sm:px-3 py-2 border-2 border-gray-800 text-gray-800 font-semibold text-xs sm:text-sm leading-tight  rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={handleRemove}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nombre Completo
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {name.firstname} {name.lastname}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Correo electrónico
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {email}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {phone}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Ciudad</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {address.city}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Calle</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {address.street}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Número exterior
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {address.number}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Código Postal
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {address.zipcode}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    </>
  );
}

export default PerfilPagina;

export const getStaticProps: GetStaticProps = async () => {
  const usuarios = await Api.getResources(USUARIOS);

  return {
    props: {
      usuarios: usuarios,
    },
  };
};
