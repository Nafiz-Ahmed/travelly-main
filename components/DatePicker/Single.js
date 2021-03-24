import React, { useEffect, useRef, useState } from "react";
import { DatePicker } from "react-rainbow-components";

function Single({ to, passenger }) {
  const [range, setRange] = useState(null);

  const [date, setDate] = useState(null);
  const ref = useRef();
  const cus_1 = useRef();

  useEffect(() => {
    setDate(range);

    if (date === null) {
      //default settings
      cus_1.current.innerHTML = "Add dates";
      cus_1.current.style.fontWeight = "300";
      cus_1.current.style.fontSize = "16px";
      cus_1.current.style.color = "rgba(0, 0, 0, 0.7)";
    } else {
      //travelling date settings
      console.log(date);
      let convert = date.toString();
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
    const date1 = document.querySelector(".custom__date");
    date1.addEventListener("mouseover", () => {
      to.current.classList.add("spec");
      passenger.current.classList.add("specb");
    });

    date1.addEventListener("mouseout", () => {
      to.current.classList.remove("spec");
      passenger.current.classList.remove("specb");
    });
  }, []);

  return (
    <div>
      <div className="calander rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto">
        <div>
          <div className="custom__container">
            <div className="custom__date " onClick={change}>
              <span className="title -mt-3">Depature</span>
              <div ref={cus_1} className="custom__1"></div>
            </div>
          </div>
          <DatePicker
            ref={ref}
            className="focus"
            id="datePicker-13"
            formatStyle="large"
            minDate={new Date(y, m, d)}
            value={range}
            onChange={(value) => setRange(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Single;
