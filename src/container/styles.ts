import styled from "styled-components";

const Navbarheight = "48px";

const TopContainer = styled.div`
  display: flex;
  background-color: #fff;
  width: inherit;
  height: fit-content;
`;

const MiddleContainer = styled.div`
  margin-top: ${Navbarheight};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: inherit-${Navbarheight};
`;

const ViewContainer = styled.div`
  background-color: #f4f2f2;
  width: 100%;
`;

export { TopContainer, MiddleContainer, ViewContainer };
