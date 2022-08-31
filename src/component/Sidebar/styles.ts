import { createGlobalStyle } from "styled-components";

//Global Style targetting custom antd Sider Class and Icon class for visual purposes.
const GlobalSiderStyle = createGlobalStyle`
.MainSider{
    height: 93vh;
    z-index: 1;
    position:sticky;
}
.MenuOutlineIcon{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 12px;
    margin-top: 17px;
    text-align: center;
    transition: all 2s;
}
`;

export { GlobalSiderStyle };
