import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import CreateRobotForm from "./CreateRobotForm";

const name = "Bender";
const imageUrl = "image.png";
const speed = 2;
const endurance = 4;

describe("Given a CreateRobotForm component", () => {
  const nameLabel = "Name:";
  const imageUrlLabel = "Image url:";
  const speedLabel = "Speed:";
  const enduranceLabel = "Endurance:";

  const actionOnSubmit = vi.fn();

  const buttonText = "Create robot";

  describe("When it is rendered", () => {
    test("Then it should show inputs for labels 'Name:', 'Image url:', 'Speed:', 'Endurance:'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateRobotForm actionOnSubmit={actionOnSubmit} />
          </Provider>
        </BrowserRouter>,
      );

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
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateRobotForm actionOnSubmit={actionOnSubmit} />
          </Provider>
        </BrowserRouter>,
      );

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

  describe("When inputs are empty", () => {
    test("Then it should show a disabled button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateRobotForm actionOnSubmit={actionOnSubmit} />
          </Provider>
        </BrowserRouter>,
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeDisabled();
    });
  });

  describe("When inputs are filled", () => {
    test("Then it should show an enabled button", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateRobotForm actionOnSubmit={actionOnSubmit} />
          </Provider>
        </BrowserRouter>,
      );

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

  describe("When a user fills in all the inputs and submits the form", () => {
    test("Then the actionOnSubmit function should be called", async () => {
      const user = userEvent.setup();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateRobotForm actionOnSubmit={actionOnSubmit} />
          </Provider>
        </BrowserRouter>,
      );

      const nameInput = screen.getByLabelText(nameLabel);
      const imageUrlInput = screen.getByLabelText(imageUrlLabel);
      const speedInput = screen.getByLabelText(speedLabel);
      const enduranceInput = screen.getByLabelText(enduranceLabel);

      await user.type(nameInput, name);
      await user.type(imageUrlInput, imageUrl);
      await user.type(speedInput, speed.toString());
      await user.type(enduranceInput, endurance.toString());

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);
    });
  });
});
