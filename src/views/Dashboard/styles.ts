import styled from 'styled-components'



const DashboardDiv = styled.div`
   display: grid;
   grid-template-columns:  repeat(4, 25%);

@media screen and (max-width: 950px) {
   grid-template-columns:  repeat(2, 50%);
  }
  @media screen and (max-width: 700px) {
   grid-template-columns:  repeat(1, 100%);
  }
`



export {DashboardDiv}