import React from "react";
import "./SelectField.css";

const SelectField = (props) => {
  const { label, name, options, changeHandle, value } = props;

  const changeHandler = (event) => {
    changeHandle({ [event.target.name]: event.target.value });
  };
  return (
    <div className="select_container">
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={changeHandler}>
        <option>Any {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
