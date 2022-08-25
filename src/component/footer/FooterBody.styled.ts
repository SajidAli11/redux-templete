import styled from "styled-components"



const FooterBody1= styled.div`

margin: 10% 0 0 40%;
background: beige;
color:red;
text-transform: capitalize;
background-color: white;
width:600px;
display: flex;
justify-content: space-around;
font-size: 20px;
font-weight: bolder;

`
const FooterBody2=styled(FooterBody1)`
margin-top: 10px;
color:black;
padding-left:20px;
`

export {FooterBody1,FooterBody2} 