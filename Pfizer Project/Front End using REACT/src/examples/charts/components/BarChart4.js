import React, { useState, useEffect } from "react";
import { Typography, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart as RechartsBarChart,
  Bar,
} from "recharts";
import { getBarChartData4 } from "./api";

const { Title } = Typography;

const BarChart4 = () => {
  const [barChartData4, setBarChartData4] = useState([]);

  useEffect(() => {
    getBarChartData4().then((data) => {
      setBarChartData4(data);
    });
  }, []);

  return (
    <Col sm={{ span: 24 }} lg={{ span: 12 }}>
      {barChartData4.length ? (
        <div className="chart-container">
          <Title level={4}>Hospitalization-Insurance Bar Chart</Title>
          <div className="chart-inner">
            <ResponsiveContainer>
              <RechartsBarChart
                data={barChartData4}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill="#413ea0" />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <Card style={{ display: "flex", justifyContent: "center" }}>
          <Spin size="large" />
        </Card>
      )}
    </Col>
  );
};

export default BarChart4;
