import { rest } from "msw";
import { robotMockApi, robotsMock } from "./robotsMock";

export const handlers = [
  rest.get(
    `${import.meta.env.VITE_ROBOTS_API_URL}/robots`,
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ robots: robotsMock }));
    },
  ),
  rest.post(
    `${import.meta.env.VITE_ROBOTS_API_URL}/robots/create`,
    (_req, res, ctx) => {
      return res(ctx.status(201), ctx.json({ robot: robotMockApi }));
    },
  ),
];

export const errorHandlers = [
  rest.get(
    `${import.meta.env.VITE_ROBOTS_API_URL}/robots`,
    (_req, res, ctx) => {
      return res(ctx.status(404, "Could not get the robots"));
    },
  ),
  rest.post(
    `${import.meta.env.VITE_ROBOTS_API_URL}/robots/create`,
    (_req, res, ctx) => {
      return res(ctx.status(404, "Could not create a new robot"));
    },
  ),
];
