import { useState } from "react";
import BabySharkForm from "./BabySharkForm";
import "./shark.css";
import FlightRecordingForm from "./FlightRecordingForm";

function TabContainer() {
  let tabs = ["Baby Shark", "Flight Recorder"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <br></br>
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li
            className="nav-item"
            key={tab}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            <a
              className={
                selectedIndex === index ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              href="#"
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div className="container">
        {selectedIndex === 0 && <BabySharkForm />}
        {selectedIndex === 1 && <FlightRecordingForm />}
      </div>
    </>
  );
}

export default TabContainer;

// event handler
// const handleClick = (event: MouseEvent) => console.log(event);
// import { MouseEvent } from "react";
