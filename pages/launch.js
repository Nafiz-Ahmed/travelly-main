import React from "react";
import Head from "../components/Index/Head";
import styles from "../styles/Launch.module.css";

function launchtickets() {
  return (
    <div>
      <Head />

      <div className={`${styles.available__launch}`}></div>
    </div>
  );
}

export default launchtickets;
