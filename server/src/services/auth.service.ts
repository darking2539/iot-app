import { hashPassword, verifyPassword } from "../middleware/hash";
import { createJWTToken } from "../middleware/auth";
import { responseUtils } from "../utils/responseUtils";

const User = require("../models/Users");


export const Register = async (
    username: string,
    password: string,
    email: string
): Promise<any> => {

    const hashedPassword = await hashPassword(password);
    const checkUser = await User.findOne( {"$or": [{ username: username }, { email: email }]})

    if (checkUser) {
        return responseUtils(400, "error", "Username or Email already exists")
    }

    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword,
    });

    const createUser = await newUser.save()
    
    if (!createUser) {
        return responseUtils(400, "error", createUser)
    }

    return responseUtils(200, "OK", "Register Sucessful")
}

export const Login = async (
    username: string,
    password: string
): Promise<any> => {

    const user = await User.findOne({ username: username })

    if (!user) {
        return responseUtils(400, "error", "User not found")
    }

    const isMatch = await verifyPassword(password, user?.password);

    if (!isMatch) {
        return responseUtils(400, "error", "password is wrong")
    }

    const jwtToken = await createJWTToken(user.username, user.email)

    return { statusCode: 200, status: "OK", message: "Login Sucessful", token: jwtToken }
    
}