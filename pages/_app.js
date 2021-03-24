import "../styles/main.css";
import "../styles/globals.css";
import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
export function reportWebVitals(metric) {
  console.log(metric);
}
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
