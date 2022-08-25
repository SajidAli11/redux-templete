import React from 'react'
import "antd/dist/antd.min.css";
import {Row,Col,Card} from 'antd';
import { Container,CardContentHead,CardIcon,CardTitle,CardContentBody, } from './WorkPlace.styled';
import { FontColorsOutlined,DribbbleOutlined,CodeSandboxOutlined,QrcodeOutlined,
    DeploymentUnitOutlined,ClusterOutlined      } from '@ant-design/icons';


            //incomplete component

const WorkPlace = () => {
  return (
    <>
    <Container>
    <Row gutter={[16, 8]}>
        <Col span={16}>
        <h2>Card Information</h2>
        <Row>
        <Col span={8}> 
            <Card >
                <CardContentHead>
                    <CardIcon><FontColorsOutlined /></CardIcon>
                    <CardTitle>Alipay</CardTitle>
                </CardContentHead>
                <CardContentBody>
                <p>Lorem ipsum dolor sit amet. Qui voluptas expedita et illo eaque sed labore possimus 
                         </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                </CardContentBody>
             </Card> 
         </Col>

         <Col span={8}> 
            <Card >
                <CardContentHead>
                    <CardIcon><DribbbleOutlined  /></CardIcon>
                    <CardTitle>Vue</CardTitle>
                </CardContentHead>
                <CardContentBody>
                <p>Lorem ipsum dolor sit amet. Qui voluptas expedita et illo eaque sed labore possimus 
                         </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                </CardContentBody>
             </Card> 
         </Col><Col span={8}> 
            <Card >
                <CardContentHead>
                    <CardIcon><CodeSandboxOutlined /></CardIcon>
                    <CardTitle>Angular</CardTitle>
                </CardContentHead>
                <CardContentBody>
                <p>Lorem ipsum dolor sit amet. Qui voluptas expedita et illo eaque sed labore possimus 
                         </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                </CardContentBody>
             </Card> 
         </Col><Col span={8}> 
            <Card >
                <CardContentHead>
                    <CardIcon><QrcodeOutlined /></CardIcon>
                    <CardTitle>Ant Designs</CardTitle>
                </CardContentHead>
                <CardContentBody>
                <p>Lorem ipsum dolor sit amet. Qui voluptas expedita et illo eaque sed labore possimus 
                         </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                </CardContentBody>
             </Card> 
         </Col><Col span={8}> 
            <Card >
                <CardContentHead>
                    <CardIcon><DeploymentUnitOutlined /></CardIcon>
                    <CardTitle>Pro Design</CardTitle>
                </CardContentHead>
                <CardContentBody>
                <p>Lorem ipsum dolor sit amet. Qui voluptas expedita et illo eaque sed labore possimus 
                         </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                </CardContentBody>
             </Card> 
         </Col><Col span={8}> 
            <Card >
                <CardContentHead>
                    <CardIcon><ClusterOutlined /></CardIcon>
                    <CardTitle>Bootstrap</CardTitle>
                </CardContentHead>
                <CardContentBody>
                    <p>Lorem ipsum dolor sit amet. Qui voluptas expedita et illo eaque sed labore possimus 
                         </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                </CardContentBody>
             </Card> 
         </Col>
        </Row>
        </Col>
        <Col span={8}>
        <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
            </Col>     
</Row>
</Container>
    </>
  )
}

export default WorkPlace