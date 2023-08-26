import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { robotsMock } from "../../mocks/robotsMock";
import { setupStore } from "../../store";
import RobotList from "./RobotList";

describe("Given a RobotList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of RobotCards with its name inside a heading", () => {
      const store = setupStore({ robotsState: { robots: robotsMock } });

      render(
        <Provider store={store}>
          <RobotList />
        </Provider>,
      );

      robotsMock.forEach((robot) => {
        const heading = screen.getByRole("heading", { name: robot.name });

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
