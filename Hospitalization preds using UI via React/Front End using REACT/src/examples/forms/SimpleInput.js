import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const SimpleInput = () => {
  const [val, setVal] = useState("");
  const updateName = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <Title>Input</Title>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={val} onChange={updateName} />
    </div>
  );
};

export default SimpleInput;
