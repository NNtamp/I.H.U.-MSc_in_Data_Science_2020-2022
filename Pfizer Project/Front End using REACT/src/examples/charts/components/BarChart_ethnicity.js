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
import { getBarChartData_ethnicity } from "./api";

const { Title } = Typography;

const BarChart_ethnicity = () => {
  const [barChartData_ethnicity, setBarChartData_ethnicity] = useState([]);

  useEffect(() => {
    getBarChartData_ethnicity().then((data) => {
      setBarChartData_ethnicity(data);
    });
  }, []);

  return (
    <Col sm={{ span: 24 }} lg={{ span: 12 }}>
      {barChartData_ethnicity.length ? (
        <div className="chart-container">
          <Title level={4}>Ethnicity Bar Chart</Title>
          <div className="chart-inner">
            <ResponsiveContainer>
              <RechartsBarChart
                data={barChartData_ethnicity}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ethnicity" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill='#00C49F' />
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

export default BarChart_ethnicity;
