import { rest } from "msw";
import { mockGame, mockGameArray } from "./mockGame";
const url = process.env.REACT_APP_URL_BACK;

export const handlers = [
  rest.post(`${url}games/users/login`, async (req, res, ctx) => {
    const body = await req.json();
    if (!body.username || !body.password) {
      return res(
        ctx.status(403),
        ctx.json({
          error: "Wrong data",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        user: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InZ2dnZ2IiwiaWQiOiI2MzBmMjkwOTJmMDU2MDMzMDFjOTY2ZjUiLCJpYXQiOjE2NjE5Mzk2MTl9.Zff5fV2EnVvFNBKZSNbmlE-fcZQbBoMhbq-q0KTjH7I",
        },
      })
    );
  }),

  rest.post(`${url}games/users/register`, async (req, res, ctx) => {
    const request: any = req;
    const userFormData: any = await request._body.get("user");
    const user = JSON.parse(userFormData);
    if (user.password === "") {
      return res(
        ctx.status(400),
        ctx.json({
          error: "Wrong data",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        message: "User created",
      })
    );
  }),

  rest.get(`${url}games/games`, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ games: mockGameArray }));
  }),

  rest.get(`${url}games/games/46546549874123`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ game: mockGame }));
  }),

  rest.get(`${url}games/games/123123123123123123`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json(new Error()));
  }),
];
