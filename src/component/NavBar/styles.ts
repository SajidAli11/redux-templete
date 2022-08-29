import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const NavbarSlider = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const IconDiv = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: space-around;
`;
const Icon = styled.span`
  font-size: 18px;
  color: white;
`;
const Language = styled.div`
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
`;
const SignUp = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
`;
const SignUpText = styled.span`
  color: white;
  font-size: 14px;
  margin-left: 5px;
`;

const LogoText = styled.span`
  width: 150px;
  display: inline-block;
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

//For the dropdown menu top-margin to match the bottom of the navbar
const GlobalStyle = createGlobalStyle`
.ant-dropdown-menu{
    margin-top:16px ;  
}
.ant-layout-header{
  padding: 0 25px;
}
 `;

export { GlobalStyle };
export { NavbarSlider, Icon, IconDiv, Language, SignUp, SignUpText, LogoText };
