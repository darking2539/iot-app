import { Login, Register } from "./auth.service"
import { connectToDB } from "../database";

connectToDB();

test('Login Test', async () => {
        
    //case 1: login success will have token
    expect(await Login("admin", "123456")).toHaveProperty("token");

    //case 2: login failed with wrong username
    expect(await Login("adminn", "123456")).toMatchObject({message: "User not found"});

    //case 3: login failed with wrong password
    expect(await Login("admin", "1234567")).toMatchObject({message: "password is wrong"});
});

test('Register Test', async () => {
        
    //case 1: Register success will have token
    expect(await Register("admin2", "1234568", "abc@gmail.com")).toMatchObject({message: "Register Sucessful"});


});