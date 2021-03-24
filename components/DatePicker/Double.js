import React, { useEffect, useRef, useState } from "react";
import { DatePicker } from "react-rainbow-components";

function Double({ to, passenger }) {
  const [range, setRange] = useState(null);

  const [date, setDate] = useState(null);
  const ref = useRef();
  const cus_1 = useRef();
  const cus_2 = useRef();

  useEffect(() => {
    setDate(range);

    if (date === null) {
      //default settings
      cus_1.current.innerHTML = "Add dates";
      cus_2.current.innerHTML = "Add dates";
      cus_1.current.style.fontWeight = "300";
      cus_1.current.style.fontSize = "16px";
      cus_1.current.style.color = "rgba(0, 0, 0, 0.7)";
      cus_2.current.style.fontWeight = "300";
      cus_2.current.style.fontSize = "16px";
      cus_2.current.style.color = "rgba(0, 0, 0, 0.7)";
    } else if (date.length === 1) {
      //travelling date settings
      let convert = date[0].toString();
      const convert__month = convert[4] + convert[5] + convert[6];
      const convert__date = convert[8] + convert[9];
      const convert__year =
        convert[11] + convert[12] + convert[13] + convert[14];
      const final__convert =
        convert__date +
        " " +
        convert__month +
        "'" +
        `<sup class="year">${convert__year}</sup>`;

      cus_1.current.innerHTML = final__convert;
      cus_1.current.style.fontWeight = "700";
      cus_1.current.style.color = "black";
    } else if (date.length === 2) {
      //return date settings
      let convert = date[1].toString();
      const convert__month = convert[4] + convert[5] + convert[6];
      const convert__date = convert[8] + convert[9];
      const convert__year =
        convert[11] + convert[12] + convert[13] + convert[14];
      const final__convert =
        convert__date +
        " " +
        convert__month +
        "'" +
        `<sup class="year">${convert__year}</sup>`;

      cus_2.current.innerHTML = final__convert;
      cus_2.current.style.fontWeight = "700";
      cus_2.current.style.color = "black";
    }
  }, [date, range]);

  const change = () => {
    ref.current.click();
  };

  const dates = new Date();
  let d = dates.getDate();
  let m = dates.getMonth();
  let y = dates.getFullYear();

  useEffect(() => {
    const cus__1 = document.querySelector(".custom__date1");
    const cus__2 = document.querySelector(".custom__date2");

    cus__1.addEventListener("mouseover", () => {
      to.current.classList.add("spec");
      cus__1.classList.add("spec");
    });
    cus__1.addEventListener("mouseout", () => {
      to.current.classList.remove("spec");
      cus__1.classList.remove("spec");
    });

    cus__2.addEventListener("mouseover", () => {
      passenger.current.classList.add("specb");
      cus__1.classList.add("spec");
    });
    cus__2.addEventListener("mouseout", () => {
      passenger.current.classList.remove("specb");
      cus__1.classList.remove("spec");
    });
  }, []);

  return (
    <div>
      <div className="calander rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto">
        <div>
          <div className="custom__container">
            <div className="custom__date custom__date1 " onClick={change}>
              <span className="title -mt-3">Depature</span>
              <div ref={cus_1} className="custom__1"></div>
            </div>

            <div className="custom__date custom__date2" onClick={change}>
              <span className="title">Return</span>
              <div ref={cus_2} className="custom__2"></div>
            </div>
          </div>
          <DatePicker
            ref={ref}
            className="focus"
            id="datePicker-15"
            selectionType="range"
            formatStyle="large"
            variant="single"
            minDate={new Date(y, m, d)}
            value={range}
            onChange={(value) => setRange(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Double;
