import React from "react";
import "antd/dist/antd.min.css";
import { LoginOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Space, Typography } from "antd";
import {
  LogoText,
  NavbarSlider,
  Icon,
  IconDiv,
  Language,
  SignUp,
  SignUpText,
} from "./styles";
import { GlobalStyle } from "./styles";
import { LoginMenuItems } from "../../utils/menuItems";
const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <GlobalStyle />

      <Header
        style={{
          position: "fixed",
          zIndex: "3",
          width: "100%",
          lineHeight: "normal",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ height: "100%", alignItems: "center" }}
        >
          <LogoText>
            <span>DIRBS-VIEW</span>
          </LogoText>
          <NavbarSlider>
            <IconDiv>
              <Language>
                <span>EN</span>
              </Language>

              <Dropdown
                overlay={
                  <Menu
                    selectable
                    defaultSelectedKeys={["3"]}
                    items={LoginMenuItems}
                  />
                }
              >
                <Typography.Link style={{ color: "white" }}>
                  <Space>
                    <SignUp>
                      <Icon>
                        <LoginOutlined />
                      </Icon>
                      <SignUpText>SIGN UP</SignUpText>
                    </SignUp>
                    {/*  signup */}
                  </Space>
                </Typography.Link>
              </Dropdown>
            </IconDiv>
          </NavbarSlider>
        </Menu>
      </Header>
    </>
  );
};
export default Navbar;
