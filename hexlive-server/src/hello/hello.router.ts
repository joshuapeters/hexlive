import express, { Request, Response } from "express";

export const itemsRouter = express.Router();

itemsRouter.get("/", async (req: Request, res: Response) => {
  res.send(200).json({
    message: "howdy!",
  });
});
