import Sidebar from "../component/Sidebar/Sidebar";
import DashBoard from "../views/Dashboard/dashboard";
import { Routes, Route } from "react-router";
import { TopContainer, MiddleContainer, ViewContainer } from "./styles";
import CrossSystemAnalysis from "../views/CrossSystemAnalysis/Crosssystemanalysis";
import LsdsTrends from "../views/LSDS/Lsds";
import DrsTrends from "../views/DRS/Drs";
import DpsTrends from "../views/DPS/Dps";
import MonthYearTrend from "../views/Core/MonthYearTrends/MonthYearTrends";
import RangeTrends from "../views/Core/RangeTrends/RangeTrends";
import Navbar from "../component/NavBar/Navbar";

const Container = () => {
  return (
    <>
      <TopContainer>
        <Navbar />
        <MiddleContainer>
          <Sidebar />
          <ViewContainer>
            <Routes>
              <Route index element={<DashBoard />}></Route>
              <Route path="dashboard" element={<DashBoard />}></Route>
              <Route
                path="crosssysanalysis"
                element={<CrossSystemAnalysis />}
              ></Route>
              <Route
                path="monthyeartrends"
                element={<MonthYearTrend />}
              ></Route>
              <Route path="rangetrends" element={<RangeTrends />}></Route>
              <Route path="lsds" element={<LsdsTrends />}></Route>
              <Route path="drs" element={<DrsTrends />}></Route>
              <Route path="dps" element={<DpsTrends />}></Route>
            </Routes>
          </ViewContainer>
        </MiddleContainer>
      </TopContainer>
    </>
  );
};

export default Container;
