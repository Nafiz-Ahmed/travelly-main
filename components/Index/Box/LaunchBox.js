import React, { useEffect, useState, useRef } from "react";
import autocomplete from "../../helper/autoComplete";
import styles from "../../../styles/Home.module.css";
import Double from "../../DatePicker/Double";
import inputFocus from "../../helper/inputFocus";
import Single from "../../DatePicker/Single";
import autoMove from "../../helper/autoMove";
import hoverAfter from "../../helper/hoverAfter";

function LaunchBox() {
  const [from, setFrom] = useState("");
  const [tos, setTo] = useState("");
  const [round, setRound] = useState(false);
  const to = useRef();
  const passenger = useRef();
  let [change, setChange] = useState(1);

  setTimeout(() => {
    setChange(Math.random());
  }, 100);

  const places = [
    "Bangabandhu Island",
    "Bargona",
    "Barisal",
    "Chitaagong",
    "Cox River Curising",
    "Cox's Bazar",
    "Dhaka",
    "Elisha",
    "Kuakata",
    "Nunia Chora",
    "Nunia Chora Landing",
    "Saint Martin",
    "Teknaf",
  ];

  useEffect(() => {
    const fromInput = document.querySelector(".from__input");
    const fromUl = document.querySelector(".ul__list");
    const toInput = document.querySelector(".to__input");
    const toUl = document.querySelector(".to__list");
    const toClick = document.querySelector(".to");
    const datesClick = document.querySelector(".dateClick");

    autocomplete(fromInput, fromUl, places, toClick);
    autocomplete(toInput, toUl, places, datesClick);

    // autoMove(fromInput, toInput, places);

    // setup style
    const from = document.querySelector(".from");
    const to = document.querySelector(".to");
    const passanger = document.querySelector(".passenger");

    from.addEventListener("focus", () => {
      fromInput.focus();
    });
    to.addEventListener("focus", () => {
      toInput.focus();
    });
    passanger.addEventListener("focus", () => {
      console.log("object");
    });
  }, []);

  useEffect(() => {
    const from = document.querySelector(".from");
    const to = document.querySelector(".to");
    const passanger = document.querySelector(".passenger");
    // const date = document.querySelector(".dateClick");

    from.addEventListener("mouseover", () => {
      from.classList.add("spec");
    });
    from.addEventListener("mouseout", () => {
      from.classList.remove("spec");
    });

    if (to.classList.contains("active")) {
      to.addEventListener("mouseout", () => {
        to.classList.add("spec");
        from.classList.add("spec");
      });

      from.addEventListener("mouseout", () => {
        from.classList.add("spec");
      });
    } else {
      to.addEventListener("mouseover", () => {
        to.classList.add("spec");
        from.classList.add("spec");
      });

      to.addEventListener("mouseout", () => {
        to.classList.remove("spec");
        from.classList.remove("spec");
      });
      from.addEventListener("mouseout", () => {
        from.classList.remove("spec");
      });
    }

    // date.addEventListener("mouseover", () => {
    //   passanger.classList.add("specb");
    // });

    passanger.addEventListener("mouseover", () => {
      passanger.classList.add("specb");

      if (to.classList.contains("active")) {
        return;
      } else {
        from.classList.remove("spec");
      }
    });
    passanger.addEventListener("mouseout", () => {
      passanger.classList.remove("specb");
    });
  }, [change]);

  // focus setting
  useEffect(() => {
    inputFocus(document.querySelectorAll(".foc"), ".form");
  }, []);

  useEffect(() => {
    const type = document.querySelectorAll(".type");
    type.forEach((item) => {
      item.addEventListener("click", () => {
        type.forEach((item) => {
          item.classList.remove("select");
        });

        item.classList.add("select");
      });
    });
  }, []);

  // submit the form to get the input information
  const submitForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const x = document.querySelector(".from");
    const y = document.querySelector(".to");
    const z = document.querySelector(".dateClick");
    const a = document.querySelector(".passenger");
    hoverAfter(x, x, x);
    hoverAfter(y, x, z);
    hoverAfter(z, y, a);
    hoverAfter(a, z, y);
  }, [change]);

  return (
    <div>
      <div className={`${styles.launch__container} flex flex-col`}>
        <div className={`${styles.type__trip}  type__trip flex  mb-5 mt-4`}>
          <div onClick={() => setRound(false)} className="type one__way select">
            Oneway
          </div>
          <div onClick={() => setRound(true)} className="type round__way">
            RoundTrip
          </div>
        </div>

        <form
          onSubmit={submitForm}
          className="flex gform flex-col items-center justify-center "
        >
          <div className="flex form border rounded-full border-collapse  w-full">
            <div
              tabIndex="0"
              className={`${styles.from} foc relative from cursor-default`}
            >
              <h1 className={styles.input__label}>From</h1>
              <input
                placeholder="Going from"
                type="text"
                className="from__input realtive"
                autoComplete="off"
                id={styles.from__input}
                onChange={(e) => setFrom(e.target.value)}
              />
              <div className="remove"></div>
              <div id={styles.from} className="ul__from">
                <div className="relative">
                  <h1>From:</h1>
                  <ul className="ul__list"></ul>
                </div>
              </div>
            </div>
            <div
              ref={to}
              tabIndex="0"
              className={`${styles.to} foc relative to cursor-default`}
            >
              <h1 className={styles.input__label}>To</h1>
              <input
                type="text"
                autoComplete="off"
                className="to__input relative"
                placeholder="Going to"
                id={styles.to__input}
                onChange={(e) => setTo(e.target.value)}
              />
              <div id={styles.to} className="ul__to">
                <div className="relative">
                  <h1>To:</h1>
                  <ul className="to__list"></ul>
                </div>
              </div>
            </div>

            {round && (
              <div
                tabIndex="0"
                className={`${styles.dates} rounded-full dateClick foc relative dates cursor-default`}
              >
                <Double to={to} passenger={passenger} />
              </div>
            )}

            {!round && (
              <div
                tabIndex="0"
                className={`${styles.dates1} rounded-full dateClick foc relative dates1 cursor-default`}
              >
                <Single to={to} passenger={passenger} />
              </div>
            )}

            <div
              tabIndex="0"
              ref={passenger}
              className={`${styles.passanger} foc relative passenger cursor-default`}
            >
              <h1 className={styles.input__label}>Passenger</h1>
              <input
                readOnly
                type="number"
                placeholder="Add Passenger"
                id={styles.pass__input}
              />
            </div>
          </div>

          <button type="submit" className="self-end px-3 py-2 mt-5 mb-3 search">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default LaunchBox;
