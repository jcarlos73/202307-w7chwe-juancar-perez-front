import { robotsMock } from "../../../mocks/robotsMock";
import { loadRobotsActionCreator, robotsReducer } from "../robotsSlice";
import { RobotsState } from "../types";

describe("Given a robotsReducer reducer", () => {
  const currentRobotsState: RobotsState = { robots: [] };
  describe("When it receives an action loadRobots with 2 robots 'Bender' and 'WALL-E'", () => {
    test("Then it should return a new state with the 2 robots 'Bender' and 'WALL-E'", () => {
      const loadRobotsAction = loadRobotsActionCreator(robotsMock);
      const newRobotsState = robotsReducer(
        currentRobotsState,
        loadRobotsAction,
      );

      expect(newRobotsState.robots).toStrictEqual(robotsMock);
    });
  });

  describe("When it receives an action loadRobots with 0 robots", () => {
    test("Then it should return a new state with 0 robots", () => {
      const loadRobotsAction = loadRobotsActionCreator([]);
      const newRobotsState = robotsReducer(
        currentRobotsState,
        loadRobotsAction,
      );

      expect(newRobotsState.robots).toStrictEqual([]);
    });
  });
});
