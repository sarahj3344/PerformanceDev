import Button from "./Button";
import Alert from "./Alert";
import InputDropdown from "./InputDropdown";
import { useState, useEffect } from "react";

function FlightRecordingForm() {
  const [configuration, setConfiguration] = useState<string>("");
  const [maxAge, setMaxAge] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [time2, setTime2] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [maxDuration, setMaxDuration] = useState<string>("");
  const [maxSize, setMaxSize] = useState<string>("");
  const [running, setRunning] = useState(false);
  const [dumpOnExit, setDumpOnExit] = useState(true);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  let configurations = ["Threads", "Memory", "Threads and Memory"];
  let duration = [
    { value: "m", label: "minute(s)" },
    { value: "h", label: "hour(s)" },
    { value: "d", label: "day(s)" },
  ];
  let filesize = [
    { value: "m", label: "MB" },
    { value: "g", label: "GB" },
  ];

  // useEffect(() => {}, []);

  useEffect(
    () => {
      // the code we want to run

      const fetchInitialState = async () => {
        try {
          const response = await fetch("/data/performance/jfrstate");
          const text = await response.json();
          const state = text.running as Boolean;
          if (state === true) setRunning(true);
          setHasFetched(true);
        } catch (error) {
          console.error("Error fetching inital state: ", error);
        }
      };

      fetchInitialState();
      // optional return function
      return () => {
        console.log("Done");
      };
    },
    [
      // tell use effect what to listen/react to in order to run code
    ]
  );

  const startCapture = async () => {
    const params = {
      configuration: configuration,
      age: maxAge,
      ageTime: time,
      duration: maxDuration,
      durationTime: time2,
      size: maxSize,
      sizeMetric: size,
      exit: dumpOnExit,
    };

    fetch("/data/performance/jfr-start-capture", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  };

  const stopCapture = () => {
    fetch("/data/performance/jfr-stop-capture", {
      method: "GET",
    })
      .then((data: any) => console.log(data))
      .catch((error: any) => console.error(error));
  };

  const handleConfigurationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setConfiguration(event.target.value);
  };

  const handleMaxAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxAge(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(event.target.value);
  };

  const handleTime2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTime2(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value);
  };

  const handleMaxDurationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMaxDuration(event.target.value);
  };

  const handleMaxSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxSize(event.target.value);
  };

  const handleExitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDumpOnExit(event.target.checked);
  };

  return (
    <>
      <form>
        <div className="content">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Configuration
            </label>
            <select
              className="form-select"
              id="inputGroupSelect02"
              value={configuration}
              onChange={handleConfigurationChange}
            >
              <option selected>Select Configuration</option>
              {configurations.map((config, index) => (
                <option key={index} value={config}>
                  {config}
                </option>
              ))}
            </select>
          </div>
          <InputDropdown
            placeholder="Max Age"
            datatype={time}
            rowData={duration}
            onChange1={handleMaxAgeChange}
            onChange2={handleTimeChange}
          ></InputDropdown>
          <InputDropdown
            placeholder="Max Duration"
            datatype={time2}
            rowData={duration}
            onChange1={handleMaxDurationChange}
            onChange2={handleTime2Change}
          ></InputDropdown>
          <InputDropdown
            placeholder="Max Size"
            datatype={size}
            rowData={filesize}
            onChange1={handleMaxSizeChange}
            onChange2={handleSizeChange}
          ></InputDropdown>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleExitChange}
            ></input>
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dump on Exit?
            </label>
          </div>
          {/* <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload custom configuration file
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div> */}
        </div>
      </form>
      <Button
        color={running ? "stop" : "start"}
        onClick={() => {
          if (running === false) {
            setRunning(true);
            console.log("STARTING CAPTURE");
            startCapture();
          } else {
            setRunning(false);
            console.log("STOPPING CAPTURE");
            stopCapture();
          }
        }}
      >
        {running === true ? "Stop Capture" : "Start Capture"}
      </Button>
      {running && <Alert>Capture Running...</Alert>}
    </>
  );
}

export default FlightRecordingForm;
