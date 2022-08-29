import { Menu, Affix } from "antd";
import Sider from "antd/lib/layout/Sider";

import "antd/dist/antd.min.css";
import React from "react";
import { SideMenuItems } from "../../utils/menuItems";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Affix offsetTop={48.01}>
      <Sider
        style={{
          height: "93vh",
          zIndex: "1",
          position: "sticky",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={() => {
          setCollapsed(!collapsed);
        }}
        trigger={
          collapsed ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginRight: "12px",
                marginTop: "17px",
                textAlign: "center",
              }}
            />
          )
        }
        breakpoint="xl"
        collapsedWidth="60"
        theme="light"
      >
        <Menu items={SideMenuItems}></Menu>
      </Sider>
    </Affix>
  );
};

export default Sidebar;
