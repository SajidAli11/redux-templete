import BulletCard from "../../component/Cards/BulletCard/BulletCard";
import ColumnCard from "../../component/Cards/ColumnCard/ColumnCard";
import DefaultCard from "../../component/Cards/DefaultCard/DefaultCard";
import GraphCard from "../../component/Cards/GraphCard/GraphCard";
import { DashboardDiv } from "./styles";
const DashBoard = () => {
  return (
    <DashboardDiv>
      <DefaultCard name="Device Stats 1" data={[100, 200]} />
      <GraphCard />
      <ColumnCard />
      <BulletCard />
    </DashboardDiv>
  );
};

export default DashBoard;
