import styled from "styled-components"

const Container=styled.div`
  
  
  padding-right:35px;
  padding-left:35px


`
//card styling
const CardContentHead=styled.div`
display: flex;

width:180px;


`
const CardIcon=styled.span`
font-size: 25px;
color:red;
`
const CardTitle=styled.h3`
margin-top: 6px;
font-size: large;
margin-left: 30px;
`
const CardContentBody=styled.div`
margin-top: 10px;
color:grey;
`

export {Container,CardContentHead,CardIcon,CardTitle,CardContentBody}