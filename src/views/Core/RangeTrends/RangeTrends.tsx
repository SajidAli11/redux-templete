import React from "react";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { Breadcrumb } from "antd";
import { BreadCrumbDiv } from "../../Dashboard/styles";
import AntdCard from "../../../component/Card/Card";

const RangeTrends = () => {
  return (
    <>
      <BreadCrumbDiv>
        <Breadcrumb>
          <BreadcrumbItem>Dashboard</BreadcrumbItem>
          <BreadcrumbItem>Core</BreadcrumbItem>
          <BreadcrumbItem>Range Trends</BreadcrumbItem>
        </Breadcrumb>
      </BreadCrumbDiv>
      <AntdCard Title="Range Trends" />
    </>
  );
};

export default RangeTrends;
