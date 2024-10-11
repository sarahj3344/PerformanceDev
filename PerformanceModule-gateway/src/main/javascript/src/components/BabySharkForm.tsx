import Button from "./Button";
import Alert from "./Alert";
import { useState, useEffect } from "react";

// Define the type for network interfaces
interface NetworkInterface {
  name: string;
  description: string;
}

interface Connections {
  NAME: string;
}

function BabySharkForm() {
  const [networkInterfaces, setNetworkInterfaces] = useState<
    NetworkInterface[]
  >([]);
  const [connections, setConnections] = useState<Connections[]>([]);
  const [selectedInterface, setSelectedInterface] = useState<string>("");
  const [inputFilter, setFilter] = useState<string>("");
  const [subsystem, setSubsystem] = useState<string>("");
  const [ip, setIp] = useState<string>("");
  const [port, setPort] = useState<string>("");
  const [connectionName, setConnectionName] = useState<string>("");
  const [logging, setLogging] = useState<boolean>(false);

  const [running, setRunning] = useState(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  let subsystems = [
    "Classic SMTP",
    "OPCUA Connections",
    "Modbus TCP Driver",
    "Logix Driver",
    "DNP3 Driver",
    "Siemens Drivers",
    "Omron Fins/TCP Driver",
    "Mitsubishi Driver",
    "IEC61850 Driver",
    "BACnet Driver",
    "TCP Driver",
    "UDP Driver",
    "SECS/GEM",
    "Voice Notification Profile",
    "SMS Notification Profile",
    "MQTT Transmission",
    "MQTT Engine",
  ];

  // useEffect(() => {}, []);

  useEffect(
    () => {
      // the code we want to run

      const fetchInterfaces = async () => {
        try {
          const response = await fetch("/data/performance/network");
          const text = await response.json();
          const ifaces = text.nifs as NetworkInterface[];
          const state = text.running as Boolean;
          if (state === true) setRunning(true);

          setNetworkInterfaces(ifaces);
          setHasFetched(true);
        } catch (error) {
          console.error("Error fetching network interfaces:", error);
        }
      };

      fetchInterfaces();
      // optional return function
      return () => {
        console.log("Done");
      };
    },
    [
      // tell use effect what to listen/react to in order to run code
    ]
  );

  useEffect(() => {
    // the code we want to run
    const fetchConnectionNames = async () => {
      {
        const params = {
          table: subsystem,
        };
        try {
          const response = await fetch("/data/performance/connections", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
          });
          const text = await response.json();
          console.log(text);
          const connectionNames = text as Connections[];

          setConnections(connectionNames);
        } catch (error) {
          console.error("Error fetching connections:", error);
        }
      }
    };
    if (hasFetched === true) fetchConnectionNames();
    // optional return function
    return () => {
      console.log("Done");
    };
  }, [
    // tell use effect what to listen/react to in order to run code
    subsystem,
  ]);

  const startCapture = async () => {
    const params = {
      device: selectedInterface,
      ip: ip,
      port: port,
      filter: inputFilter,
      connection: connectionName,
      logging: logging,
    };

    const response = await fetch("/data/performance/start-capture", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const state = await response.json();
    if (state.running === false) setRunning(false);
  };

  const stopCapture = () => {
    fetch("/data/performance/stop-capture", {
      method: "GET",
    })
      .then((data: any) => console.log(data))
      .catch((error: any) => console.error(error));
  };

  const handleInterfaceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedInterface(event.target.value);
  };

  const handleSubsystemChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSubsystem(event.target.value);
  };

  const handleConnectionNameChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setConnectionName(event.target.value);
  };

  const handleIPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIp(event.target.value);
  };

  const handlePortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPort(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleLoggingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogging(event.target.checked);
  };

  return (
    <>
      <form>
        <div className="content">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Interface
            </label>
            <select
              className="form-select"
              id="inputGroupSelect02"
              value={selectedInterface}
              onChange={handleInterfaceChange}
            >
              <option value="">Select Network Interface</option>
              {networkInterfaces.map((iface, index) => (
                <option key={index} value={iface.name}>
                  {iface.description}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Subsystem
            </label>
            <select
              className="form-select"
              id="inputGroupSelect02"
              value={subsystem}
              onChange={handleSubsystemChange}
            >
              <option selected>Select Subsystem</option>
              {subsystems.map((system, index) => (
                <option key={index} value={system}>
                  {system}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Connection
            </label>
            <select
              className="form-select"
              id="inputGroupSelect02"
              value={connectionName}
              onChange={handleConnectionNameChange}
            >
              <option selected>Select Connection</option>
              {connections.map((conn, index) => (
                <option key={index} value={conn.NAME}>
                  {conn.NAME}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Destination IP Address
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Destination IP Address"
              aria-label="Destination IP Address"
              aria-describedby="basic-addon1"
              value={ip}
              onChange={handleIPChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Destination Port
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Destination Port"
              aria-label="Destination Port"
              aria-describedby="basic-addon1"
              value={port}
              onChange={handlePortChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Protocol Filter
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Filter"
              aria-label="Filter"
              aria-describedby="basic-addon1"
              value={inputFilter}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleLoggingChange}
            ></input>
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Increase Logging During Capture
            </label>
          </div>
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

export default BabySharkForm;
