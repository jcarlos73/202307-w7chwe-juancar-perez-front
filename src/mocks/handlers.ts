import { rest } from "msw";
import { robotsMock } from "./robotsMock";

export const handlers = [
  rest.get(
    `${import.meta.env.VITE_ROBOTS_API_URL}/robots`,
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ robots: robotsMock }));
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
];
