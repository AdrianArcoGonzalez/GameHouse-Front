import { rest } from "msw";
const url = process.env.REACT_APP_URL_BACK;

export const handlers = [
  rest.post(`${url}games/users/login`, async (req, res, ctx) => {
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

  rest.post(`${url}games/users/register`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "User created",
      })
    );
  }),

  // rest.post(`${url}games/users/login`, async (req, res, ctx) => {
  //   const { password } = await req.json();
  //   const status = password !== "" ? 200 : 400;
  //   return res(ctx.status(status),
  //    ctx.json({
  //      user: { token: "imAToken" } }));
  // }),
];
