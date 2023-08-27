import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import CreatePage from "./CreatePage";

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
});
