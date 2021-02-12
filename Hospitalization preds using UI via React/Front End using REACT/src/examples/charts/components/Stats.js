import React, { useState, useEffect } from "react";
import { Row, Col, Statistic, Card, Progress, Spin } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { getStats } from "./api";

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getStats().then((data) => {
      setStats(data);
    });
  }, []);

  return (
    <Row gutter={[24, 24]}>
      {stats.length ? (
        <>
          {stats.map(({ title, value, status }) => {
            if (status) {
              const increased = status === "increase";
              const color = increased ? "#3f8600" : "#cf1322";
              const icon = increased ? (
                <ArrowUpOutlined />
              ) : (
                <ArrowDownOutlined />
              );

              return (
                <Col key={title} sm={{ span: 12 }} lg={{ span: 6 }}>
                  <Card>
                    <Statistic
                      title={title}
                      value={value}
                      precision={2}
                      valueStyle={{ color }}
                      prefix={icon}
                      suffix="%"
                    />
                  </Card>
                </Col>
              );
            } else {
              return (
                <Col key={title} sm={{ span: 12 }} lg={{ span: 6 }}>
                  <Card style={{ display: "flex", justifyContent: "center" }}>
                    <Progress type="dashboard" percent={value} width={62} />
                  </Card>
                </Col>
              );
            }
          })}
        </>
      ) : (
        <Col span={24}>
          <Card style={{ display: "flex", justifyContent: "center" }}>
            <Spin size="large" />
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default Stats;
