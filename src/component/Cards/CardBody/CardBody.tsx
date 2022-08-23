import React from "react";
import { Row, Tooltip } from "antd";
import { Header, CardDiv } from "./styles";
import { InfoCircleOutlined } from "@ant-design/icons";
const CardBody = ({ name, data }) => {
  return (
    <CardDiv
      className="card"
      title={
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Row
            style={{ marginBottom: 10 }}
            justify="space-between"
            align="middle"
          >
            <span> {name}</span>
            <Tooltip title={name}>
              <InfoCircleOutlined />
            </Tooltip>
          </Row>
          <Row justify="space-between" align="middle">
            <Header>PKR 126,560</Header>
          </Row>
        </Row>
      }
    >
      <Row justify="space-between">
        <span>{data[0]}</span>
        <span>{data[1]}</span>
      </Row>
    </CardDiv>
  );
};

export default CardBody;
