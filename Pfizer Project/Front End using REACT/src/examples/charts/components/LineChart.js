import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getLineChartData } from "./api";

const { Title } = Typography;

const LineChart = () => {
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    getLineChartData().then((data) => {
      setLineChartData(data);
    });
  }, []);

  return (
    <Row className="row" gutter={[24, 24]}>
      <Col span={24}>
        {lineChartData.length ? (
          <div className="chart-container">
            <Title level={4}>My super line chart</Title>
            <div className="chart-inner">
              <ResponsiveContainer>
                <RechartsLineChart
                  data={lineChartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <Card style={{ display: "flex", justifyContent: "center" }}>
            <Spin size="large" />
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default LineChart;
