import styled from "styled-components";

const Navbarheight = "48px";

//Entire Content Container
const TopContainer = styled.div`
  display: flex;
  background-color: #fff;
  width: inherit;
  height: fit-content;
`;

//Container which has the Sidebar and the View Section of the subsystems
const MiddleContainer = styled.div`
  margin-top: ${Navbarheight};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: inherit-${Navbarheight};
`;

//Container with only the view section of the subsystems
const ViewContainer = styled.div`
  background-color: #f4f2f2;
  width: 100%;
  height: fit-content;
`;

export { TopContainer, MiddleContainer, ViewContainer };
