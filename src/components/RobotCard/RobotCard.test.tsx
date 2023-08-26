import { render, screen } from "@testing-library/react";
import { robotsMock } from "../../mocks/robotsMock";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it receives a robot with name 'Bender'", () => {
    test("Then it should show 'Bender' inside a heading", () => {
      const text = "Bender";

      render(<RobotCard robot={robotsMock[0]} />);

      const heading = screen.getByRole("heading", { name: text });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show an image with alt text 'Portrait of Bender'", () => {
      const altText = "Portrait of Bender";

      render(<RobotCard robot={robotsMock[0]} />);

      const image = screen.getByAltText(altText);

      expect(image).toBeInTheDocument();
    });
  });
});
