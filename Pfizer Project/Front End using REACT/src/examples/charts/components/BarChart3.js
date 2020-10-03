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
import { getBarChartData3 } from "./api";

const { Title } = Typography;

const BarChart3 = () => {
  const [barChartData3, setBarChartData3] = useState([]);

  useEffect(() => {
    getBarChartData3().then((data) => {
      setBarChartData3(data);
    });
  }, []);

  return (
    <Col sm={{ span: 24 }} lg={{ span: 12 }}>
      {barChartData3.length ? (
        <div className="chart-container">
          <Title level={4}>Hospitalization-Age Bar Chart</Title>
          <div className="chart-inner">
            <ResponsiveContainer>
              <RechartsBarChart
                data={barChartData3}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                {/* <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" /> */}

                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill='#FF8042' />
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

export default BarChart3;
