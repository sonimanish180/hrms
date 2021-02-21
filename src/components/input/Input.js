import React from "react";

const defaultClasses = {
  inputClassName: "",
  labelClassName: "",
  iconClassName: "",
  inputComponentClass: "",
  inputIconContainer: ""
};

const Input = ({
  type = "text",
  value,
  name,
  label,
  id,
  icon,
  classes ={...defaultClasses},
  onChange,
  placeHolder,
}) => {
  const {
    inputClassName,
    labelClassName,
    iconClassName,
    inputComponentClass,
    inputIconContainer
 } = classes;
  return (
    <div className={`input-component ${inputComponentClass}`}>
      {label && <label className={`label ${labelClassName}`}>{label}</label>}
      <div className={`input-icon-container ${inputIconContainer}`}>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          className={`input ${inputClassName}`}
          placeholder={placeHolder}
          onChange={onChange}
        />
        {icon}
      </div>
    </div>
  );
};

export default Input;
