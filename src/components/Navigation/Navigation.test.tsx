import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show two links with 'Home' and 'Create'", () => {
      const expectedHomeLink = "Home";
      const expectedCreateLink = "Create";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const homeLink = screen.getByRole("link", { name: expectedHomeLink });
      const createLink = screen.getByRole("link", { name: expectedCreateLink });

      expect(homeLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
    });
  });
});
