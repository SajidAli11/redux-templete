import React, { useState } from "react";
import "antd/dist/antd.min.css";
import {
  AlertOutlined,
  DownOutlined,
  LoginOutlined,
  AppstoreTwoTone,
} from "@ant-design/icons";
import { Layout, Menu, Dropdown, Space, Typography } from "antd";
import {
  LogoIcon,
  NavbarSlider,
  Icon,
  IconDiv,
  Language,
  SignUp,
  SignUpText,
} from "./Header.styled";
import { menu, SignUpDropDown } from "./DropDown";
import { GlobalStyle } from "./Global.styled";

const { Header } = Layout;

const Navbar = () => {
  const [size, setSize] = useState(2);
  return (
    <>
      <GlobalStyle />

      <Header
        style={{
          position: "fixed",
          zIndex: 1,
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
          </LogoIcon>{" "}
          {/* styled component for logo */}
          <NavbarSlider>
            {/* <SearchDiv>
          {searchstate&&<SearchInput placeholder="Searching . . ." />}
          <Icon onClick={handleState}><SearchOutlined /></Icon>
        </SearchDiv> */}
            {/* styled component for search input type */}

            <IconDiv>
              <Icon>
                <AlertOutlined />
              </Icon>

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
                <Dropdown overlay={menu}>
                  <Typography.Link style={{ color: "white" }}>
                    <Space size={size}>
                      Ln {/*  Languages */}
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Dropdown>
              </Language>
            </IconDiv>
          </NavbarSlider>
        </Menu>
      </Header>
    </>
  );
};
export default Navbar;
