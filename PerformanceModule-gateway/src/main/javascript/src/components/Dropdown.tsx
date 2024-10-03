interface Props {
  children: string[];
  // color?: "success" | "danger";
  onClick: () => void;
}

// const [selectedIndex, setSelectedIndex] = useState(0);

const Dropdown = ({ children, onClick }: Props) => {
  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        id="inputGroupSelect02"
        //   value={selectedInterface}
        // onChange={handleSelectChange}
      >
        <option value="">Select Network Interface</option>
        {children.map((iface, index) => (
          <option key={index} value={iface}>
            {iface}
          </option>
        ))}
      </select>
      <label className="input-group-text" htmlFor="inputGroupSelect02">
        Options
      </label>
    </div>
  );
};

export default Dropdown;
