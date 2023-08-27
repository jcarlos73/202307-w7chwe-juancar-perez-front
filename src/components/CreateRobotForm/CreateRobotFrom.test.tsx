import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateRobotForm from "./CreateRobotForm";

describe("Given a CreateRobotForm component", () => {
  const nameLabel = "Name:";
  const imageUrlLabel = "Image url:";
  const speedLabel = "Speed:";
  const enduranceLabel = "Endurance:";

  describe("When it is rendered", () => {
    test("Then it should show inputs for labels 'Name:', 'Image url:', 'Speed:', 'Endurance:'", () => {
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

  describe("When user type in 'Bender', 'image.png', 2, 4", () => {
    test("Then the input should show the typed values", async () => {
      const name = "Bender";
      const imageUrl = "image.png";
      const speed = 2;
      const endurance = 4;

      render(<CreateRobotForm />);

      const nameInput = screen.getByLabelText(nameLabel);
      const imageUrlInput = screen.getByLabelText(imageUrlLabel);
      const speedInput = screen.getByLabelText(speedLabel);
      const enduranceInput = screen.getByLabelText(enduranceLabel);

      await userEvent.type(nameInput, name);
      await userEvent.type(imageUrlInput, imageUrl);
      await userEvent.type(speedInput, speed.toString());
      await userEvent.type(enduranceInput, endurance.toString());

      expect(nameInput).toHaveValue(name);
      expect(imageUrlInput).toHaveValue(imageUrl);
      expect(speedInput).toHaveValue(speed);
      expect(enduranceInput).toHaveValue(endurance);
    });
  });

  const buttonText = "Create robot";
  describe("When inputs are empty", () => {
    test("Then it should show a disabled button", () => {
      render(<CreateRobotForm />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeDisabled();
    });
  });

  describe("When inputs are filled", () => {
    test("Then it should show an enabled button", async () => {
      const name = "Bender";
      const imageUrl = "image.png";
      const speed = 2;
      const endurance = 4;

      render(<CreateRobotForm />);

      const nameInput = screen.getByLabelText(nameLabel);
      const imageUrlInput = screen.getByLabelText(imageUrlLabel);
      const speedInput = screen.getByLabelText(speedLabel);
      const enduranceInput = screen.getByLabelText(enduranceLabel);

      await userEvent.type(nameInput, name);
      await userEvent.type(imageUrlInput, imageUrl);
      await userEvent.type(speedInput, speed.toString());
      await userEvent.type(enduranceInput, endurance.toString());

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeEnabled();
    });
  });
});
