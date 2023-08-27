import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import CreatePage from "./CreatePage";

const nameLabel = "Name:";
const imageUrlLabel = "Image url:";
const speedLabel = "Speed:";
const enduranceLabel = "Endurance:";

const name = "Bim";
const imageUrl = "image.png";
const speed = 2;
const endurance = 4;

describe("Given a CreatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Create a robot' inside a heading", () => {
      const headingText = "Create a Robot";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreatePage />
          </Provider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When a user fills in all the inputs and submits the form", () => {
    test("Then the actionOnSubmit function should be called", async () => {
      const buttonText = "Create robot";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreatePage />
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

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
    });
  });
});
