import { render, screen } from "@testing-library/react";
import CreateRobotForm from "./CreateRobotForm";

describe("Given a CreateRobotForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show inputs for labels 'Name:', 'Image url:', 'Speed:', 'Endurance:'", () => {
      const nameLabel = "Name:";
      const imageUrlLabel = "Image url:";
      const speedLabel = "Speed:";
      const enduranceLabel = "Endurance:";

      render(<CreateRobotForm />);

      const nameInput = screen.getByLabelText(nameLabel);
      const imageUrlInput = screen.getByLabelText(imageUrlLabel);
      const speedInput = screen.getByLabelText(speedLabel);
      const enduranceInput = screen.getByLabelText(enduranceLabel);

      expect(nameInput).toBeInTheDocument();
      expect(imageUrlInput).toBeInTheDocument();
      expect(speedInput).toBeInTheDocument();
      expect(enduranceInput).toBeInTheDocument();
    });
  });
});
