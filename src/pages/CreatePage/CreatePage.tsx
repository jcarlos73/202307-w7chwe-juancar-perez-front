import CreateRobotForm from "../../components/CreateRobotForm/CreateRobotForm";
import "./CreatePage.css";

const CreatePage = () => {
  return (
    <section className="form-section">
      <header>
        <h2>Create a Robot</h2>
      </header>
      <CreateRobotForm />
    </section>
  );
};

export default CreatePage;
