import React from "react";
import AntdCard from "../../component/Card/Card";
import { Col, Row } from "antd";
const DashBoard = () => {
  return (
    <>
      <Row
        gutter={{
          xs: 4,
          sm: 8,
          md: 12,
          lg: 16,
        }}
      >
        <Col flex="auto">
          <AntdCard Title="Dashboard" />
          <AntdCard Title="Dashboard" />
        </Col>
        <Col flex="auto">
          <AntdCard Title="Dashboard" />
          <AntdCard Title="Dashboard" />
        </Col>
        <Col flex="auto">
          <AntdCard Title="Dashboard" />
          <AntdCard Title="Dashboard" />
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
