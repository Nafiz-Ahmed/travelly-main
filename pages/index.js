import React, { useEffect, useRef, useState } from "react";
import Head from "../components/Index/Head";
import Header from "next/head";
import styles from "../styles/Home.module.css";
// export async function getStaticProps(ctx) {
//   const res = await fetch("https://api.ipregistry.co/?key=opmxekbtbdx4e2");
//   const data = await res.json();
//   return {
//     props: { allData: data }, // will be passed to the page component as props
//   };
// }
function Home() {
  // block right click
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);
  return (
    <div>
      <Header>
        <title>Travelly</title>
      </Header>
      <Head />
    </div>
  );
}
export default Home;
