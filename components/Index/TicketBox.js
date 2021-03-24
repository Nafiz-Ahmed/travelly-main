import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import LaunchBox from "./Box/LaunchBox";
import BusBox from "./Box/BusBox";
import TrainBox from "./Box/TrainBox";
import FlightBox from "./Box/FlightBox";

function TicketBox() {
  const router = useRouter();

  useEffect(() => {
    const link = document.querySelectorAll(".tab");

    link.forEach((item) => {
      if (router.pathname === "/launch") {
        link.forEach((item) => {
          item.classList.remove(`${styles.self__active}`);
        });
        document
          .querySelector(".launch__tab")
          .classList.add(`${styles.self__active}`);
        document.querySelector(".launch__content").style.display = "block";
      } else if (router.pathname === "/bus") {
        link.forEach((item) => {
          item.classList.remove(`${styles.self__active}`);
        });
        document
          .querySelector(".bus__tab")
          .classList.add(`${styles.self__active}`);
        document.querySelector(".bus__content").style.display = "block";
      } else if (router.pathname === "/train") {
        link.forEach((item) => {
          item.classList.remove(`${styles.self__active}`);
        });
        document
          .querySelector(".train__tab")
          .classList.add(`${styles.self__active}`);
        document.querySelector(".train__content").style.display = "block";
      } else if (router.pathname === "/flight") {
        link.forEach((item) => {
          item.classList.remove(`${styles.self__active}`);
        });
        document
          .querySelector(".flight__tab")
          .classList.add(`${styles.self__active}`);
        document.querySelector(".flight__content").style.display = "block";
      } else if (router.pathname === "/") {
        link.forEach((item) => {
          item.classList.remove(`${styles.self__active}`);
        });
        document
          .querySelector(".launch__tab")
          .classList.add(`${styles.self__active}`);
        document.querySelector(".launch__content").style.display = "block";
      }
    });
  }, []);

  return (
    <div>
      <div className="ticket__box flex flex-col items-center justify-center">
        <div className={`${styles.tab__bar} flex items-center justify-around`}>
          <div
            id="tab"
            title="launch"
            className={`${styles.launch__tab} launch__tab  tab flex items-center cursor-pointer justify-center`}
          >
            <Link href="/launch">
              <Image
                className={`${styles.launch__logo}`}
                src="/images/yacht.svg"
                width="40"
                height="40"
              />
            </Link>
          </div>

          <div
            id="tab"
            title="bus"
            className={`${styles.bus__tab} bus__tab tab flex items-center cursor-pointer justify-center`}
          >
            <Link href="/bus">
              <Image
                className={`${styles.bus__logo}`}
                src="/images/bus.svg"
                width="40"
                height="40"
              />
            </Link>
          </div>

          <div
            id="tab"
            title="train"
            className={`${styles.train__tab} train__tab tab flex items-center cursor-pointer justify-center`}
          >
            <Link href="/train">
              <Image
                className={`${styles.train__logo}`}
                src="/images/train.svg"
                width="40"
                height="40"
              />
            </Link>
          </div>

          <div
            id="tab"
            title="flight"
            className={`${styles.flight__tab} flight__tab tab flex items-center cursor-pointer justify-center`}
          >
            <Link href="/flight">
              <Image
                className={`${styles.flight__logo}`}
                src="/images/aeroplane.svg"
                width="40"
                height="40"
              />
            </Link>
          </div>
        </div>

        <div className={styles.tab__contents}>
          <div className="launch__content hidden">
            <LaunchBox />
          </div>
          <div className="bus__content hidden">
            <BusBox />
          </div>
          <div className="train__content hidden">
            <TrainBox />
          </div>
          <div className="flight__content hidden">
            <FlightBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketBox;
