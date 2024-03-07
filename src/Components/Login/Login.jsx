import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../utils/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const response = await axios.post(
        "http://localhost:8010/user/login",
        user
      );

      if (response.status === 200) {
        login()
        navigate("/dashboard");
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <div className="flex flex-col justify-center my-20 items-center w-96 border-gray-200 border-2 shadow-lg p-4">
        <div className="text-xl pb-6 text-green-800 font-bold "> Login </div>
        <div>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleLogin}
            type="submit"
          >
            <label> Username </label>
            <input
              required
              value={user.username}
              onChange={handleChange}
              name="username"
              className="border rounded-sm p-1 border-black"
              placeholder="enter username here"
              type=""
            />
            <label> Password </label>
            <input
              required
              value={user.password}
              onChange={handleChange}
              name="password"
              className="border rounded-sm p-1 border-black"
              placeholder="enter password here"
              type="password"
            />
            <input
              className="border cursor-pointer rounded-md text-button-text p-1 bg-box-background"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
