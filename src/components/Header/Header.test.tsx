import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logo with alt text 'Robots app logo'", () => {
      const altText = "Robots app logo";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const image = screen.getByAltText(altText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show links to 'Home' and 'Create'", () => {
      const homeLinkText = "Home";
      const createLinkText = "Create";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const homeLink = screen.getByRole("link", { name: homeLinkText });
      const createLink = screen.getByRole("link", { name: createLinkText });

      expect(homeLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
    });
  });
});
