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
  NavDiv,
} from "./styles";

import { LoginMenuItems } from "../../utils/menuItems";
const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <NavDiv>
        <Header>
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
                    overlayStyle={{ marginTop: "28px" }}
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
      </NavDiv>
    </>
  );
};
export default Navbar;
