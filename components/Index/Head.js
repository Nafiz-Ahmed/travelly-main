import React from "react";
import styles from "../../styles/Home.module.css";
import NavBar from "./NavBar";
import TicketBox from "./TicketBox";

function Head() {
  return (
    <div className={`${styles.head__bg}`}>
      <div>
        <NavBar />
      </div>
      <div
        className={`z-10 relative container ml-auto mr-auto p-4 w-11/12 overfolw-hidden max-w-7xl`}
      >
        <TicketBox />
      </div>
    </div>
  );
}

export default Head;
