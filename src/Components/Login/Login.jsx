import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../utils/AuthContext";
import { IoMdLogIn } from "react-icons/io";

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
      const response = await axios.post(
        "http://localhost:8010/user/login",
        user
      );
      console.log(response.data.data.token)
      if (response) {
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
    <div className="flex items-center  w-100% justify-center">
      <div className="flex flex-col justify-center my-20 items-center p-4">
        <div className="text-center text-2xl p-1 px-2 text-button-text rounded-md font-bold w-[150px] h-10 bg-box-background "> LOGIN </div>
        <div className="mt-12">
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
              className="border-none rounded-sm p-1"
              placeholder="Enter username here"
              type=""
            />
            <label> Password </label>
            <input
              required
              value={user.password}
              onChange={handleChange}
              name="password"
              className="border-none rounded-sm p-1"
              placeholder="Enter password here"
              type="password"
            />
            <span className="ml-7 flex gap-2 justify-center border cursor-pointer mt-4 rounded-3xl w-32 text-button-text p-1 bg-box-background">
            <IoMdLogIn className="text-2xl" />
            <input
              type="submit"
              value="Submit"
            />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
