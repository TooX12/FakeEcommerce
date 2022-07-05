import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HeadComponent from "../app/components/HeadComponent";
import LandingSection from "../app/components/Home/LandingSection";
import ProductsSection from "../app/components/Home/ProductsSection";
import { Producto } from "../app/ts/producto.interface";
import { PRODUCTOS } from "../app/utils/apiLinks";
import { Api } from "./api/api";

const Home = ({productos} : { productos : Producto[]}) => {
  return (
    <>
      <HeadComponent title="Inicio" />
      <LandingSection />
      <ProductsSection productos={productos}/>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const productos = await Api.getResources(PRODUCTOS)

  return {
    props: {
      productos: productos,
    },
  };
};

