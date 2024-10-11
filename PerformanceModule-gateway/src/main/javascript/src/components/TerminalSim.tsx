interface Terminal {
  command: string;
  response: string;
}

function TerminalSim() {
  // const getInitialState = () => {
  //   fetch("/data/babyshark/state", {
  //     method: "GET",
  //   })
  //     .then((data: any) => console.log(data))
  //     .catch((error: any) => console.error(error));
  // };

  // getInitialState();

  return (
    <>
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-tab active">PowerShellSIM</div>
          <div className="terminal-tab">Cmd</div>
          <div className="terminal-tab">WSL</div>
        </div>
        {/* Terminal Content Area */}
        <div className="terminal-content" id="terminal-content">
          {/* Previously executed commands will be displayed here */}
          <div className="terminal-line">
            <span className="prompt">PS C:\Users\You&gt;</span> Ignition
            Terminal Simulator! <br></br>Select option to begin:
          </div>
          <div className="terminal-line">
            <span className="prompt">Hello, World!</span>
          </div>
          {/* Input Area for New Commands */}
          <div className="terminal-line">
            <span className="prompt">PS C:\Users\You&gt;</span>
            <input
              type="text"
              className="terminal-input"
              id="terminal-input"
              autoFocus
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TerminalSim;
