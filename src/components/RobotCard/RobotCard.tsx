import { Robot } from "../../types";
import "./RobotCard.css";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({
  robot: { name, imageUrl, endurance, speed },
}: RobotCardProps) => {
  return (
    <article className="card">
      <img
        src={imageUrl}
        alt={`Portrait of ${name}`}
        className="card__img"
        height={200}
      />
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <div>
          <span>Speed</span>
          <div className="card__speed bar">
            <div
              className="bar__inner speed"
              style={{ width: `${(speed / 10) * 100}%` }}
            ></div>
          </div>
        </div>
        <div>
          <span>Endurance</span>
          <div className="card__endurance bar">
            <div
              className="bar__inner endurance"
              style={{ width: `${(endurance / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RobotCard;
