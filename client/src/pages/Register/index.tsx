import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { APIRegister } from "../../api/auth";
import Swal from 'sweetalert2'

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    var jsonParam: any = { username: username, password: password, email: email };
    APIRegister(jsonParam).then((resp: any) => {

      Swal.fire({
        icon: 'success',
        title: resp.data.status,
        text: resp.data.message
      }).then(()=> {
        history("/login")
      })
    }).catch((err: any) => {

      Swal.fire({
        icon: 'error',
        title: err.response.data.status,
        text: err.response.data.message
      })
    })
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-white p-8 shadow">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              className="w-full border border-gray-300 p-2 rounded"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full border border-gray-300 p-2 rounded"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
        <button
          className="w-full bg-gray-500 text-white font-bold mt-2 py-2 px-4 rounded"
          onClick={() => { history("/login") }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
