import { render, screen } from "@testing-library/react";
import ListPage from "./ListPage";

describe("Given a ListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'List Page' inside a heading", () => {
      const headingText = "List Page";

      render(<ListPage />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
