import styled from 'styled-components'



const DashboardDiv = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);

@media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
  }
`



export {DashboardDiv}