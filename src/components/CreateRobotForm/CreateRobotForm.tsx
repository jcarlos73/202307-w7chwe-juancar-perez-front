import "./CreateRobotForm.css";

const CreateRobotForm = () => {
  return (
    <form className="form">
      <div>
        <label htmlFor="name" className="form__label">
          Name:
        </label>
        <input type="text" id="name" className="form__input" />
      </div>
      <div>
        <label htmlFor="image" className="form__label">
          Image url:
        </label>
        <input type="url" id="image" className="form__input" />
      </div>
      <div>
        <label htmlFor="speen" className="form__label">
          Speed:
        </label>
        <input
          type="number"
          id="speed"
          min={0}
          max={10}
          className="form__input"
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
        />
      </div>
      <button type="submit" className="form__button">
        Create robot
      </button>
    </form>
  );
};

export default CreateRobotForm;
