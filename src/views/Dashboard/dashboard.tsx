import DefaultCard from "../../component/Cards/DefaultCard/DefaultCard";
import GraphCard from "../../component/Cards/GraphCard/GraphCard";
import { DashboardDiv } from "./styles";
const DashBoard = () => {
  return (
    <DashboardDiv>
      <DefaultCard name="Device Stats 1" data={[100, 200]} />
      <GraphCard />
      <DefaultCard name="Device Stats 3" data={[600, 700]} />
      <DefaultCard name="Device Stats 4" data={[900, 1000]} />
    </DashboardDiv>
  );
};

export default DashBoard;
