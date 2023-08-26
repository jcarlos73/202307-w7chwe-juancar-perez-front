import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
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
  });
});
