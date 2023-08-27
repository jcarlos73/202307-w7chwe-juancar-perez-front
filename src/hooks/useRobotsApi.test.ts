import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../mocks/handlers";
import { robotMockApi, robotsMock } from "../mocks/robotsMock";
import { server } from "../mocks/server";
import useRobotsApi from "./useRobotsApi";

describe("Given a useRobotsApi custom hook", () => {
  describe("When calling a getRobotsApi function", () => {
    const { result } = renderHook(() => useRobotsApi());
    const { getRobotsApi } = result.current;

    test("Then it should return a list of robots", async () => {
      const robots = await getRobotsApi();

      expect(robots).toStrictEqual(robotsMock);
    });

    test("Then it should throw an error 'Could not get the robots'", () => {
      server.resetHandlers(...errorHandlers);

      const error = new Error("Could not get the robots");

      const robots = getRobotsApi();

      expect(robots).rejects.toThrowError(error);
    });
  });

  describe("When calling an addRobotApi function with a new robot 'R2D2'", () => {
    const { result } = renderHook(() => useRobotsApi());
    const { addRobotApi } = result.current;

    test("Then it should return the new robot 'R2D2'", async () => {
      const newRobot = await addRobotApi(robotMockApi);

      expect(newRobot).toHaveProperty("name", robotMockApi.name);
    });

    test("Then it should throw an error 'Could not create a new robot'", async () => {
      server.resetHandlers(...errorHandlers);

      const error = new Error("Could not create a new robot");

      const newRobot = addRobotApi(robotMockApi);

      expect(newRobot).rejects.toThrowError(error);
    });
  });
});
