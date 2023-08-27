import { useNavigate } from "react-router-dom";
import CreateRobotForm from "../../components/CreateRobotForm/CreateRobotForm";
import useRobotsApi from "../../hooks/useRobotsApi";
import { useAppDispatch } from "../../store";
import { addRobotActionCreator } from "../../store/robots/robotsSlice";
import { Robot } from "../../types";

const CreatePage = () => {
  const { addRobotApi } = useRobotsApi();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const actionOnSubmit = async (robot: Omit<Robot, "_id">) => {
    const newRobot = await addRobotApi(robot);

    dispatch(addRobotActionCreator(newRobot));

    navigate("/home");
  };

  return (
    <section className="form-section">
      <header>
        <h2>Create a Robot</h2>
      </header>
      <CreateRobotForm actionOnSubmit={actionOnSubmit} />
    </section>
  );
};

export default CreatePage;
