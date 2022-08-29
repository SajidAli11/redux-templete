import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const LogoIcon = styled.div`
  font-size: 30px;
`;
const NavbarSlider = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const IconDiv = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-around;
`;
const Icon = styled.span`
  font-size: 25px;
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

//For the dropdown menu top-margin to match the bottom of the navbar
const GlobalStyle = createGlobalStyle`
.ant-dropdown-menu{
    margin-top:12px ;  
}

 `;

export { GlobalStyle };
export { LogoIcon, NavbarSlider, Icon, IconDiv, Language, SignUp, SignUpText };
