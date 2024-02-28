import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    mobileNo: "",
    qualification: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8001/register", user);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center mt-6">
    <div className="flex flex-col items-center w-96 border-gray-200 border-2 shadow-lg p-4">
      <div className="text-xl pb-6 text-green-800 font-bold"> Register </div>
      <div>
        <form
          className="flex flex-col gap-2"
          type="submit"
          onSubmit={handleSubmit}
        >
          <label> Name </label>
          <input
            required
            value={user.name}
            name="name"
            onChange={handleChange}
            className="border rounded-sm p-1 border-black"
            placeholder="enter name here"
            type="text"
          />
          <label> Email </label>
          <input
            required
            value={user.email}
            name="email"
            onChange={handleChange}
            className="border rounded-sm p-1 border-black"
            placeholder="enter email here"
            type="email"
          />
          <label> Password </label>
          <input
            required
            value={user.password}
            name="password"
            onChange={handleChange}
            className="border rounded-sm p-1 border-black"
            placeholder="enter password here"
            type="password"
          />
          <label> Mobile No. </label>
          <input
            required
            value={user.mobileNo}
            name="mobileNo"
            onChange={handleChange}
            className="border rounded-sm p-1 border-black"
            placeholder="enter no. here"
            type="number"
          />
           
          <input
            className="border cursor-pointer rounded-sm p-1 border-black"
            type="submit"
            value="Register"
          />
          <p>
            {" "}
            Already have account!{" "}
            <Link className="text-blue-600" to={"/login"}>
              {" "}
              Login{" "}
            </Link>
          </p>
           
        </form>
        
      </div>
    </div>
    </div>
  );
};

export default Register;
