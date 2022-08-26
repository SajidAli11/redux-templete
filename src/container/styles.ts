import styled from 'styled-components'


const TopContainer = styled.div`
  display: flex;
  background-color: #e7e4e4;
  width: inherit;
`;

const MiddleContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  width: 100%;
  position: sticky;
`;

const ViewContainer = styled.div`
  background-color: #999;
  padding: 32px;
  margin: 12px;
  width: 100%;
  
`;

export {TopContainer, MiddleContainer, ViewContainer}