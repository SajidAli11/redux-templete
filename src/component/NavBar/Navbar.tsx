import React from "react";
import "antd/dist/antd.min.css";
import { LoginOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  LogoText,
  RightMenuDiv,
  RightSubMenuIcon,
  RightMenu,
  LanguageLabel,
  SignUp,
  LabelText,
  Logo,
  LogoDiv,
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
          <LogoDiv to={"/dashboard"}>
            <Logo src={require("../../assets/dirbs-logo.png")} />{" "}
            <LogoText>DIRBS-VIEW</LogoText>
          </LogoDiv>

          <RightMenuDiv>
            <RightMenu>
              <LanguageLabel>
                <LabelText>EN</LabelText>
              </LanguageLabel>

              <Dropdown
                overlay={
                  <Menu
                    selectable
                    defaultSelectedKeys={["3"]}
                    items={LoginMenuItems}
                  />
                }
              >
                <Typography.Link>
                  <Space>
                    <SignUp>
                      <RightSubMenuIcon>
                        <LoginOutlined />
                      </RightSubMenuIcon>
                      <LabelText>SIGN UP</LabelText>
                    </SignUp>
                    {/*  signup */}
                  </Space>
                </Typography.Link>
              </Dropdown>
            </RightMenu>
          </RightMenuDiv>
        </Menu>
      </Header>
    </>
  );
};
export default Navbar;
