import { Area } from "@ant-design/plots";
import { Card, Row, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { data } from "../../../utils/dummydata";
const GraphCard = () => {
  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
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
          <span> Graph Card </span>
          <Tooltip title="graph card">
            <InfoCircleOutlined />
          </Tooltip>
        </Row>
        <Row>
          <Area height={80} width={220} {...config} />
        </Row>
      </Row>
      <Row justify="space-around" style={{ marginTop: 20 }}>
        <span>data 1</span>
        <span>data 2</span>
      </Row>
    </Card>
  );
};

export default GraphCard;
