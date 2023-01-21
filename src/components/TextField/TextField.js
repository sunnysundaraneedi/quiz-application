import React from "react";
import "./TextField.css";

const TextField = (props) => {
  const { label, name, changeHandle, value } = props;

  const changeHandler = (event) => {
    changeHandle({ [event.target.name]: event.target.value });
  };
  return (
    <div className="select_container">
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        name={name}
        placeholder="Number of questions..."
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default TextField;
