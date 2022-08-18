import { Layout, Menu } from "antd";
import { useState } from "react";
import { DashboardOutlined } from "@ant-design/icons";

import { Sidebarcontainer } from "./styles";
import "antd/dist/antd.min.css";
import React from "react";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const MenuTitles = [
    "Dashboard",
    "Cross-System-Analysis",
    "Core",
    "LSDS",
    "DRS",
    "DPS",
  ];
  const MenuChildren = ["Range Trends", "Month/Year Trends"];

  const Items = MenuTitles.map((menuItem, index) => ({
    key: menuItem,
    icon: React.createElement(DashboardOutlined),
    label: menuItem,
    children:
      menuItem === "Core"
        ? MenuChildren.map((menuItem, index) => ({
            key: index,
            label: menuItem,
          }))
        : "",
  }));

  return (
    <>
      <Sidebarcontainer>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            breakpoint="xl"
            collapsedWidth="60"
            theme="light"
          >
            <div className="logo" />
            <Menu
              mode="inline"
              defaultSelectedKeys={["Dashboard"]}
              items={Items}
            />
          </Sider>
        </Layout>
      </Sidebarcontainer>
    </>
  );
};

export default Sidebar;
