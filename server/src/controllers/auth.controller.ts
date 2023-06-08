import { Request, Response } from "express";
import * as authService from "../services/auth.service";


export const Login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {

    const loginService = await authService.Login(username, password)
    res.status(loginService?.statusCode).send(loginService);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const Register = async (req: Request, res: Response): Promise<void> => {
  const { username, password, email } = req.body;
  try {

    const registerService = await authService.Register(username, password, email)

    res.status(registerService?.statusCode).send(registerService);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};


export const Profile = async (req: Request, res: Response): Promise<void> => {
  const { userData } = req.body;
  try {

    res.status(200).send(userData);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};