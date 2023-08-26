import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { robotsMock } from "../../mocks/robotsMock";
import { setupStore, store } from "../../store";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'ROBOTS' inside a heading ", () => {
      const headingText = "ROBOTS";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", { name: headingText });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a list of images with alt texts", () => {
      const store = setupStore({ robotsState: { robots: robotsMock } });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      robotsMock.forEach((robot) => {
        const altText = `Portrait of ${robot.name}`;

        const image = screen.getByAltText(altText);

        expect(image).toBeInTheDocument();
      });
    });
  });
});
