import { ComponentType } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

type MyAProps<T extends { title?: string }> = {
  Component: ComponentType<T>;
  pageProps: T;
};

function MyApp<T extends object>({ Component, pageProps }: MyAProps<T>) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
