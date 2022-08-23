import { Card, Row, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { data } from "../../../utils/dummydata";
import { Column } from "@ant-design/plots";

const ColumnCard = () => {
  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
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
          <span> Column Card </span>
          <Tooltip title="column card">
            <InfoCircleOutlined />
          </Tooltip>
        </Row>
        <Row>
          <Column height={80} width={220} {...config} />
        </Row>
      </Row>
      <Row justify="space-around" style={{ marginTop: 20 }}>
        <span>data 1</span>
        <span>data 2</span>
      </Row>
    </Card>
  );
};

export default ColumnCard;
