import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // // debugger
    // const userLogin = await axios.post("http://localhost:8001/login", user);
    // console.log("userLogin----------",userLogin.data)
    // if(userLogin.data.success == true) { 
    //   localStorage.setItem('login', true)
    //   navigate('/employee')
    // } else {
    //   alert("Please register first")
    //   navigate('/register')
    // }
  };

  return (
    <div className="flex items-center justify-center mt-6"> 
    <div className="flex flex-col justify-center my-20 items-center w-96 border-gray-200 border-2 shadow-lg p-4">
      <div className="text-xl pb-6 text-green-800 font-bold "> Login </div>
      <div>
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit}
          type="submit"
        >
          <label> Email </label>
          <input
            required
            value={user.email}
            onChange={handleChange}
            name="email"
            className="border rounded-sm p-1 border-black"
            placeholder="enter email here"
            type="email"
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
            className="border cursor-pointer rounded-md text-white p-1 bg-green-800"
            type="submit"
            value="Login"
          />
          <p>
            {" "}
            Don't have Account ?{" "}
            <Link className="text-blue-600" to={"/register"}>
              Register{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
