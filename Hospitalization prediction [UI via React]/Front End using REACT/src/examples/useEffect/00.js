import React, { useState, useEffect } from "react";
import { Typography, Button } from "antd";

const { Title } = Typography;

const UseEffect00 = () => {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    console.log("useEffect demo");

    // return () => console.log("Unmount");
  });

  return (
    <div>
      <Title>useEffect 00</Title>
      <Button type="primary" onClick={addOne}>
        Counter {counter}
      </Button>
    </div>
  );
};

export default UseEffect00;
