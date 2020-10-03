import React from "react";
import { Typography, Divider, Row, Col } from "antd";
// import Stats from "./components/Stats";
import LineChart from "./components/LineChart";
import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import BarChart_ethnicity from "./components/BarChart_ethnicity";
import BarChart3 from "./components/BarChart3";
import BarChart4 from "./components/BarChart4";
import BarChart5 from "./components/BarChart5";

import "./styles.css";

const { Title } = Typography;

const DemoPage1 = () => {
  return (
    <div className="demo-container">
      <Title>MIMIC Charts</Title>

      <Row className="row" gutter={[24, 24]}>
        <BarChart />
        <PieChart />
        <BarChart_ethnicity />
        <BarChart5 />
        <BarChart4 />
        <BarChart3 />


        <Col sm={{ span: 24 }} lg={{ span: 12 }}></Col>
      </Row>
      <Divider />
      {/* <Stats /> */}
      {/* <LineChart /> */}
      <AreaChart />




    </div>
  );
};

export default DemoPage1;
