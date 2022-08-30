import React from "react";
import "antd/dist/antd.min.css";
import { LoginOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Space, Typography, Row, Col } from "antd";
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
  GlobalStyle,
} from "./styles";

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
        }}
      >
        <Row align="middle" justify="space-between">
          <Col>
            <LogoDiv to={"/dashboard"}>
              <Logo src={require("../../assets/dirbs-logo.png")} />
              <LogoText>DIRBS-VIEW</LogoText>
            </LogoDiv>
          </Col>
          <Col>
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
                    </Space>
                  </Typography.Link>
                </Dropdown>
              </RightMenu>
            </RightMenuDiv>
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default Navbar;
