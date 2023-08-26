import { useAppSelector } from "../../store";
import RobotCard from "../RobotCard/RobotCard";
import "./RobotList.css";

const RobotList = () => {
  const robots = useAppSelector((state) => state.robotsState.robots);

  return (
    <ul className="robot-list">
      {robots.map((robot) => {
        return (
          <li key={robot._id}>
            <RobotCard robot={robot} />
          </li>
        );
      })}
    </ul>
  );
};

export default RobotList;
