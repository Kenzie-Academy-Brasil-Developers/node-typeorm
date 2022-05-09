import { Request, Response, NextFunction } from "express";
import "express-async-errors";

export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export const AppErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) =>
  err instanceof AppError
    ? res.status(err.statusCode).json({
        status: "Error",
        message: err.message,
      })
    : res.status(500).json({
        status: "Error",
        message: "Internal server error",
      });
