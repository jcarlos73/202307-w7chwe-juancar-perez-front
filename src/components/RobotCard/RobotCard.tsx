import { Robot } from "../../types";
import "./RobotCard.css";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({
  robot: { name, imageUrl, resistance, speed },
}: RobotCardProps) => {
  return (
    <article className="card">
      <img src={imageUrl} alt={`Portrait of ${name}`} className="card__img" />
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <div>
          <span>Speed</span>
          <div className="card__speed bar">
            <div
              className="bar__inner"
              style={{ width: `${(speed / 10) * 100}%` }}
            ></div>
          </div>
        </div>
        <div>
          <span>Resistance</span>
          <div className="card__resistance bar">
            <div
              className="bar__inner"
              style={{ width: `${(resistance / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RobotCard;
