import { Robot } from "../../types";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({ robot: { name, imageUrl } }: RobotCardProps) => {
  return (
    <article className="card">
      <img src={imageUrl} alt={`Portrait of ${name}`} className="card__img" />
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <div className="card__speed bar">
          <div className="bar__inner"></div>
        </div>
        <div className="card__resistance bar">
          <div className="bar__inner"></div>
        </div>
      </div>
    </article>
  );
};

export default RobotCard;
