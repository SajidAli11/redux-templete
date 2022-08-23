import { Bullet } from "@ant-design/plots";
import { Card, Row, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const BulletCard = () => {
  const data = [
    {
      title: "",
      ranges: [100],
      measures: [80],
      target: 85,
    },
  ];
  const config = {
    data,
    measureField: "measures",
    rangeField: "ranges",
    targetField: "target",
    xField: "title",
    color: {
      range: "#f0efff",
      measure: "#5B8FF9",
      target: "#3D76DD",
    },
    xAxis: {
      line: null,
    },
    yAxis: {
      tickMethod: ({ max }) => {
        const interval = Math.ceil(max / 5); // 自定义刻度 ticks

        return [0, interval, interval * 2, interval * 3, interval * 4, max];
      },
    },
  };
  return (
    <Card style={{ margin: 20 }} className="card">
      <Row style={{ display: "flex", flexDirection: "column" }}>
        <Row
          style={{ marginBottom: 10 }}
          justify="space-between"
          align="middle"
        >
          <span> Bullet Card </span>
          <Tooltip title="bullet card">
            <InfoCircleOutlined />
          </Tooltip>
        </Row>
        <Row>
          <Bullet height={80} width={220} {...config} />
        </Row>
      </Row>
      <Row justify="space-around" style={{ marginTop: 20 }}>
        <span>data 1</span>
        <span>data 2</span>
      </Row>
    </Card>
  );
};

export default BulletCard;
