import { Layout, Menu, Affix } from "antd";

import "antd/dist/antd.min.css";
import React from "react";
import { menuItems } from "../../utils/menuItems";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Affix offsetTop={65}>
        <Sider
          style={{
            minHeight: "100vh",
            zIndex: "1",
            position: "sticky",
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={() => {
            setCollapsed(!collapsed);
          }}
          trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          breakpoint="xl"
          collapsedWidth="60"
          theme="light"
        >
          <Menu items={menuItems}></Menu>
        </Sider>
      </Affix>
    </>
  );
};

export default Sidebar;
