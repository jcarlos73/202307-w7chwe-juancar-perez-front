import { robotMock, robotsMock } from "../../../mocks/robotsMock";
import { addRobotActionCreator, robotsReducer } from "../robotsSlice";
import { RobotsState } from "../types";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an addRobot action with a list of two robots and a new robot", () => {
    test("Then it should a new state with the old robots and the new one", () => {
      const currentRobotsState: RobotsState = { robots: robotsMock };

      const addRobotAction = addRobotActionCreator(robotMock);
      const newRobotsState = robotsReducer(currentRobotsState, addRobotAction);

      expect(newRobotsState.robots).toContain(robotMock);
      expect(newRobotsState.robots).toHaveLength(robotsMock.length + 1);
    });
  });

  describe("When it receives an addRobot action with 0 robots and a new robot", () => {
    test("Then it should a new state with the new robot", () => {
      const currentRobotsState: RobotsState = { robots: [] };
      const newRobotsStateLength = 1;

      const addRobotAction = addRobotActionCreator(robotMock);
      const newRobotsState = robotsReducer(currentRobotsState, addRobotAction);

      expect(newRobotsState.robots).toContain(robotMock);
      expect(newRobotsState.robots).toHaveLength(newRobotsStateLength);
    });
  });
});
