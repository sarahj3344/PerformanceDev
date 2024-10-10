import { useState, useEffect } from "react";
import BabySharkForm from "./BabySharkForm";
import "./shark.css";
import FlightRecordingForm from "./FlightRecordingForm";

function TabContainer() {
  let tabs = ["Baby Shark", "Flight Recorder", "Terminal Simulator"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(
    () => {
      // the code we want to run

      const fetchInitialTab = async () => {
        try {
          const response = await fetch("/data/performance/network");
          const response2 = await fetch("/data/performance/jfrstate");
          const text = await response.json();
          const text2 = await response2.json();
          const state = text.running as Boolean;
          const state2 = text2.running as Boolean;
          if (state === true) setSelectedIndex(0);
          if (state2 === true) setSelectedIndex(1);
        } catch (error) {
          console.error("Error fetching state", error);
        }
      };

      fetchInitialTab();
      // optional return function
      return () => {
        console.log("Done");
      };
    },
    [
      // tell use effect what to listen/react to in order to run code
    ]
  );

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
