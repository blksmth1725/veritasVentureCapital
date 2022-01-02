import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
