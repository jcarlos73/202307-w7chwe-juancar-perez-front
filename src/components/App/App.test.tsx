import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'ROBOTS' inside a heading ", () => {
      const headingText = "ROBOTS";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", { name: headingText });

      expect(title).toBeInTheDocument();
    });
  });
});
