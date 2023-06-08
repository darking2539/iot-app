import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import path from "path";

config({ path: path.resolve(__dirname, "../../.env") });

const secretKey: Secret = process.env.JWT_SECRET_KEY || "";

export const createJWTToken = async (
  username: string,
  email: string
): Promise<string> => {
  const token = jwt.sign(
    { username: username, email: email },
    secretKey,
    {
      expiresIn: "1 hours",
    }
  );

  return token;
};

export interface CustomRequest extends Request {
  username: string | JwtPayload;
  email: string | JwtPayload;
}

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, secretKey);
    req.body.userData = decoded

    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};
