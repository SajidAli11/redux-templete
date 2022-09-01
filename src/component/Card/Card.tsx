import React from "react";
import Card from "antd/lib/card/Card";

type CardProps = {
  Title: string;
};

const AntdCard = ({ Title }: CardProps) => {
  return (
    <div style={{ padding: "18px", overflow: "hidden" }}>
      <Card
        title={Title}
        extra={<a href="#">More</a>}
        style={{
          width: "100%",
        }}
      >
        <p> content</p>
        <p> content</p>
        <p> content</p>
      </Card>
    </div>
  );
};

export default AntdCard;
