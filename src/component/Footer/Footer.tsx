import React from "react";
import "antd/dist/antd.min.css";
import { Col, Row, Layout } from "antd";
import { FooterWrapper } from "./Footer.styled";

const { Footer } = Layout;
const FooterSection = () => {
  return (
    <Layout>
      <FooterWrapper>
        <Footer>
          <Row align="middle" justify="space-between">
            <Col>ⒸCopyright 2022 DIRBS All Right Reserved.</Col>
            <Col>Version 1.1.0</Col>
          </Row>
        </Footer>
      </FooterWrapper>
    </Layout>
  );
};

export default FooterSection;
