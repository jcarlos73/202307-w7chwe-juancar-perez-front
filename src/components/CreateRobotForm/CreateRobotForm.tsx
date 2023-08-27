import { useEffect, useState } from "react";
import { Robot } from "../../types";
import "./CreateRobotForm.css";

interface CreateRobotFormProps {
  actionOnSubmit: (robot: Omit<Robot, "_id">) => void;
}

const CreateRobotForm = ({ actionOnSubmit }: CreateRobotFormProps) => {
  const [robot, setRobot] = useState<Omit<Robot, "_id">>({
    name: "",
    imageUrl: "",
    speed: -1,
    endurance: -1,
  });
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRobot({
      ...robot,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    setDisabled(
      !Object.values(robot).every((value) => {
        return value.toString().length >= 1;
      }),
    );
  }, [robot]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(robot);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name" className="form__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form__input"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imageUrl" className="form__label">
          Image url:
        </label>
        <input
          type="url"
          id="imageUrl"
          className="form__input"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="speed" className="form__label">
          Speed:
        </label>
        <input
          type="number"
          id="speed"
          min={0}
          max={10}
          className="form__input"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="endurance" className="form__label">
          Endurance:
        </label>
        <input
          type="number"
          id="endurance"
          min={0}
          max={10}
          className="form__input"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="form__button" disabled={disabled}>
        Create robot
      </button>
    </form>
  );
};

export default CreateRobotForm;
