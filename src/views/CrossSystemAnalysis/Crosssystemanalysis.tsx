import React from "react";
import AntdCard from "../../component/Card/Card";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { Breadcrumb } from "antd";
import { BreadCrumbDiv } from "../Dashboard/styles";
const CrossSystemAnalysis = () => {
  return (
    <>
      <BreadCrumbDiv>
        <Breadcrumb>
          <BreadcrumbItem>Cross System Analysis</BreadcrumbItem>
        </Breadcrumb>
      </BreadCrumbDiv>
      <AntdCard Title="Cross System Analysis" />
    </>
  );
};

export default CrossSystemAnalysis;
