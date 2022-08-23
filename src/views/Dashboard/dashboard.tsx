import CardBody from "../../component/Cards/CardBody/CardBody";
import { DashboardDiv } from "./styles";
const DashBoard = () => {
  return (
    <DashboardDiv>
      <CardBody name="Device Stats 1" data={[100, 200]} />
      <CardBody name="Device Stats 2" data={[300, 400]} />
      <CardBody name="Device Stats 3" data={[600, 700]} />
      <CardBody name="Device Stats 4" data={[900, 1000]} />
    </DashboardDiv>
  );
};

export default DashBoard;
