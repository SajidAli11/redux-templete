import React from "react";
import AntdCard from "../../component/Card/Card";
import { Header } from "antd/lib/layout/layout";
import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { BreadCrumbDiv } from "./styles";
const DashBoard = () => {
  return (
    <>
      <BreadCrumbDiv>
        <Breadcrumb>
          <BreadcrumbItem>Dashboard</BreadcrumbItem>
        </Breadcrumb>
      </BreadCrumbDiv>

      <AntdCard Title="Dashboard" />
    </>
  );
};

export default DashBoard;
