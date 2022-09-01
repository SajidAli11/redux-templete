import React from "react";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import AntdCard from "../../../component/Card/Card";
import { Breadcrumb } from "antd";
import { BreadCrumbDiv } from "../../Dashboard/styles";
const MonthYearTrend = () => {
  return (
    <>
      <BreadCrumbDiv>
        <Breadcrumb>
          <BreadcrumbItem>Dashboard</BreadcrumbItem>
          <BreadcrumbItem>Core</BreadcrumbItem>
          <BreadcrumbItem>Month Year Trends</BreadcrumbItem>
        </Breadcrumb>
      </BreadCrumbDiv>
      <AntdCard Title="Month Year Trends" />
    </>
  );
};

export default MonthYearTrend;
