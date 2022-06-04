import React, { useState } from "react";
import { Typography, Button, Spin, Divider } from "antd";

const { Title } = Typography;

const UseEffect02 = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchQuote = () => {
    setIsLoading(true);

    fetch("http://api.icndb.com/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJoke(data.value.joke);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Title>useEffect 02</Title>
      <Button type="primary" onClick={fetchQuote} loading={isLoading}>
        Fetch Quote!
      </Button>
      <Divider />
      <div>
        {isLoading ? <Spin size="large" /> : <Title level={4}>{joke}</Title>}
      </div>
    </div>
  );
};

export default UseEffect02;
