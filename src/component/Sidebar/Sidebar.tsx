import { Menu, Affix, Layout } from "antd";

import "antd/dist/antd.min.css";
import React from "react";
import { SideMenuItems } from "../../utils/menuItems";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Sider } = Layout;
import { GlobalSiderStyle } from "./styles";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <GlobalSiderStyle />
      <Affix offsetTop={48.01}>
        <Sider
          className="MainSider"
          collapsible
          collapsed={collapsed}
          onCollapse={() => {
            setCollapsed(!collapsed);
          }}
          trigger={
            collapsed ? (
              <MenuUnfoldOutlined />
            ) : (
              <MenuFoldOutlined className="MenuOutlineIcon" />
            )
          }
          breakpoint="xl"
          collapsedWidth="60"
          theme="light"
        >
          <Menu items={SideMenuItems}></Menu>
        </Sider>
      </Affix>
    </>
  );
};

export default Sidebar;
