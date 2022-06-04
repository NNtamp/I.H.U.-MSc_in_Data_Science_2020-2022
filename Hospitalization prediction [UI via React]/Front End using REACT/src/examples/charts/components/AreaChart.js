import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart as RechartsAreaChart,
  Area,
} from "recharts";
import { getAreaChartData } from "./api";

const { Title } = Typography;

const AreaChart = () => {
  const [areaChartData, setAreaChartData] = useState([]);

  useEffect(() => {
    getAreaChartData().then((data) => {
      setAreaChartData(data);
    });
  }, []);

  return (
    <Row className="row" gutter={[24, 24]}>
      <Col span={24}>
        {areaChartData.length ? (
          <div className="chart-container">
            <Title level={4}>Hospitalization-Gender area chart</Title>
            <div className="chart-inner">
              <ResponsiveContainer>
                <RechartsAreaChart
                  data={areaChartData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="percentage"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </RechartsAreaChart>
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

export default AreaChart;
