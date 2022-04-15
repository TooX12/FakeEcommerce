import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../app/components/Layout";
import useStorage from "../app/hooks/useStorage";
import { AppContextProvider } from "../app/hooks/useContext";

const {getItem, setItem,removeItem,} = useStorage();
console.log(getItem);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
