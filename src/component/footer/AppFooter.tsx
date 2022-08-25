import React from 'react'
import "antd/dist/antd.min.css";
import { FooterBody1,FooterBody2 } from './FooterBody.styled';
import { PieChartOutlined } from '@ant-design/icons';



const AppFooter = () => {

  return (
    <>
    
    <FooterBody1>
        <span>Dirb Designs</span>
        <span><PieChartOutlined /></span>
        <span>footer text</span>
        </FooterBody1>
    <FooterBody2>2022 Produced by Ant Financial Experience Department</FooterBody2> 
     
    
    </>
  )
}

export default AppFooter