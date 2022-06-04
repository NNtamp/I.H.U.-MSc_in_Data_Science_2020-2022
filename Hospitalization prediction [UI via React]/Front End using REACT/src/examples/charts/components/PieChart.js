import React, { useState, useEffect } from "react";
import { Typography, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
} from "recharts";
import { getPieChartData } from "./api";

const { Title } = Typography;
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    getPieChartData().then((data) => {
      setPieChartData(data);
    });
  }, []);

  return (
    <Col sm={{ span: 24 }} lg={{ span: 12 }}>
      {pieChartData.length ? (
        <div className="chart-container">
          <Title level={4}>Gender pie chart</Title>
          <div className="chart-inner">
            <ResponsiveContainer>
              <RechartsPieChart>             
                <Pie
                  data={pieChartData}
                  dataKey="percentage"
                  outerRadius={100}
                  fill="#eb2f96"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  fill='#0088FE' label
                />
              </RechartsPieChart>
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

export default PieChart;
