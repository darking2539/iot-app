import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { APILogin } from "../../api/auth";
import Swal from 'sweetalert2'

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // LoginLogic
        var jsonParam: any = { username: username, password: password };
        APILogin(jsonParam).then((resp: any)=> {
            localStorage.setItem("token", resp.data.token)
            history("/dashboard")
        }).catch((err: any)=> {

            Swal.fire({
                icon: 'error',
                title: err.response.data.status,
                text: err.response.data.message
              })
        })
    };

    const handleRegister = () => {
        history("/register")
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded mb-2"
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        className="w-full bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;