import React from "react";
import "antd/dist/antd.min.css";
import { LoginOutlined, AppstoreTwoTone } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Space, Typography } from "antd";
import {
  LogoIcon,
  NavbarSlider,
  Icon,
  IconDiv,
  Language,
  SignUp,
  SignUpText,
} from "./styles";
import { SignUpDropDown } from "./DropDown";
import { GlobalStyle } from "./styles";
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
          <LogoIcon>
            <AppstoreTwoTone />
          </LogoIcon>
          <NavbarSlider>
            <IconDiv>
              <Dropdown overlay={SignUpDropDown}>
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

              <Language>
                <span>EN</span>
              </Language>
            </IconDiv>
          </NavbarSlider>
        </Menu>
      </Header>
    </>
  );
};
export default Navbar;
