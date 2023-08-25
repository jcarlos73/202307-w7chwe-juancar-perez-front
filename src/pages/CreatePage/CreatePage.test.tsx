import { render, screen } from "@testing-library/react";
import CreatePage from "./CreatePage";

describe("Given a CreatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Create a robot' inside a heading", () => {
      const headingText = "Create a Robot";

      render(<CreatePage />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
