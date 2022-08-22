import { Layout, Menu } from "antd";
import { useState } from "react";
import { ContentDiv, Sidebarcontainer } from "./styles";
import "antd/dist/antd.min.css";
import React from "react";
import { menuItems } from "../../utils/menuItems";
import { Outlet } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
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
            <Menu items={menuItems}></Menu>
          </Sider>
        </Layout>
      </Sidebarcontainer>
      <ContentDiv>
        <Outlet />
      </ContentDiv>
    </>
  );
};

export default Sidebar;
