import React from "react";

const Input = (props) => {
  console.log("props", props);
  return <input type={props.typeInput} onChange={props.onChangeInput} />;
};

export default Input;
