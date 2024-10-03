import { useState, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  placeholder: string;
  datatype: string;
  rowData: Option[];
  onChange1: React.ChangeEventHandler<HTMLInputElement>;
  onChange2: React.ChangeEventHandler<HTMLSelectElement>;
}

const InputDropdown = ({
  placeholder,
  datatype,
  rowData,
  onChange1,
  onChange2,
}: Props) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-label={placeholder}
        placeholder={placeholder}
        onChange={onChange1}
        required
      />
      <select
        className="form-select"
        id="inputGroupSelect02"
        value={datatype}
        onChange={onChange2}
        required
      >
        {/* <option value="" disabled>
          {placeholder}
        </option> */}
        {rowData.map((config, index) => (
          <option key={index} value={config.value}>
            {config.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDropdown;
