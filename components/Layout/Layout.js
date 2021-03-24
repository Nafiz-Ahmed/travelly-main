import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Footer from "./Footer";

function Layout({ children }) {
  // console.log(allData);
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
