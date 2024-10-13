import { useState, useEffect } from "react";

interface Terminal {
  operatingSystem: string;
  response: string;
}

function TerminalSim() {
  useEffect(() => {
    // the code we want to run
    const fetchCommand = async () => {
      {
        const params = {
          command: terminalCommand,
        };
        try {
          const response = await fetch("/data/performance/terminalSim", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
          });
          const text = await response.json();
          const terminalResponse = text as Terminal[];
          setTerminalOutput(
            (prevOutput) =>
              `${prevOutput}\n${terminalResponse}\n${header}${terminalCommand}`
          );
        } catch (error) {
          console.error("Error fetching terminal details:", error);
        }
      }
    };
  });

  const [terminalOutput, setTerminalOutput] = useState<string>("");
  const [terminalCommand, setTerminalCommand] = useState<string>("");
  const [terminalType, setTerminalType] = useState<string>("PowershellSIM");
  const [environment, setEnvironment] = useState<string>("WSL");
  let header = "PS C:\\Ignition\\Simulator> ";
  let params = terminalCommand;
  let options = [
    "Get OS Information",
    "Get Available Memory",
    "Get CPU Usage",
    "Get Port Usage",
  ];

  const terminalInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalCommand(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTerminalOutput(
        (prevOutput) => `${prevOutput}\n${header}${terminalCommand}`
      );
      setTerminalCommand("");
    }
  };

  return (
    <>
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-tab active">{terminalType}</div>
          <div className="terminal-tab">Cmd</div>
          <div className="terminal-tab">{environment}</div>
        </div>
        {/* Terminal Content Area */}
        <div className="terminal-content" id="terminal-content">
          {/* Previously executed commands will be displayed here */}
          <div className="terminal-line">
            <span className="prompt">{header}</span> Ignition Terminal
            Simulator! <br></br>Select option to begin:<br></br>
            <ol>
              {options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ol>
          </div>
          <div className="terminal-line">
            {terminalOutput.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          {/* Input Area for New Commands */}
          <div className="terminal-line">
            <span className="prompt">{header}</span>
            <input
              type="text"
              className="terminal-input"
              id="terminal-input"
              value={terminalCommand}
              onChange={terminalInputChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TerminalSim;
