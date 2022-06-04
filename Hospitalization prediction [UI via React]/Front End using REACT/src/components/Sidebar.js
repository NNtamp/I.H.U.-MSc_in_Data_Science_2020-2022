import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Models">
        <Item>
          Prediction
          <Link to="/forms/ant-design-form-submit" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Stats">
        <Item>
          MIMIC Charts <Link to="/charts/demo-2" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
