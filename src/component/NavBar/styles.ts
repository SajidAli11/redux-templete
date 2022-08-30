import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "antd";
import Navbar from "./Navbar";
const LogoDiv = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
const LogoText = styled.span`
  width: 100px;
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
const RightMenuDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 8px;
`;
const RightMenu = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
`;
const RightSubMenuIcon = styled.span`
  font-size: 18px;
  color: white;
`;
const LanguageLabel = styled.div`
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
`;
const SignUp = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: flex-end;
`;
const LabelText = styled.span`
  color: white;
  font-size: 12px;
  margin-left: 5px;
`;

//For the dropdown menu top-margin to match the bottom of the navbar
const GlobalStyle = createGlobalStyle`
.ant-dropdown-menu{
    margin-top:8px ;  
}
.ant-layout-header{
  padding: 0 10px;
  height: 48px;
}
.ant-row{
  margin-top: 4px;
}


 `;

export {
  RightMenuDiv,
  RightSubMenuIcon,
  RightMenu,
  LanguageLabel,
  SignUp,
  LabelText,
  LogoText,
  Logo,
  LogoDiv,
  GlobalStyle,
};
