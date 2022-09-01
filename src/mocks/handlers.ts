import { rest } from "msw";
const url = process.env.REACT_APP_URL_BACK;

export const handlers = [
  rest.post(`${url}games/users/register`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "User created",
      })
    );
  }),
];
