import { Response } from "express";
import jwt from "jsonwebtoken";
export const genarateToken = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
 res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: "strict",
  path: '/', // Ensure it's available to all routes
});
  return token;
};
