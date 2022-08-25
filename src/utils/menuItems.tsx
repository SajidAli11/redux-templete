import {
  DashboardOutlined,
  FundOutlined,
  BlockOutlined,
  MobileOutlined,
  BarChartOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import React from "react";

import { Link } from "react-router-dom";

export const menuItems = [
  {
    key: "dashboard",
    icon: <DashboardOutlined />,
    label: (
      <Link to="/dashboard">
        <span>Dashboard</span>
      </Link>
    ),
  },
  {
    key: "cross-system-analysis",
    icon: <FundOutlined />,
    label: (
      <Link to="/crosssysanalysis">
        <span>Cross System Analysis</span>
      </Link>
    ),
  },
  {
    key: "core",
    icon: <BlockOutlined />,
    label: "Core",
    children: [
      {
        key: "rangetrends",
        icon: <BarChartOutlined />,
        label: (
          <Link to="/rangetrends">
            <span>Range Trends</span>
          </Link>
        ),
      },
      {
        key: "monthyeartrends",
        icon: <AreaChartOutlined />,
        label: (
          <Link to="/monthyeartrends">
            <span>Month Year Trends</span>
          </Link>
        ),
      },
    ],
  },
  {
    key: "lsds",
    icon: <MobileOutlined />,
    label: (
      <Link to="/lsds">
        <span>LSDS</span>
      </Link>
    ),
  },
  {
    key: "drs",
    icon: <MobileOutlined />,
    label: (
      <Link to="/drs">
        <span>DRS</span>
      </Link>
    ),
  },
  {
    key: "dps",
    icon: <MobileOutlined />,
    label: (
      <Link to="/dps">
        <span>DPS</span>
      </Link>
    ),
  },
];
