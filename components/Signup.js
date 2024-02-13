import React, { useState } from "react";

function Signup({ switchOnClick }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: newValue });
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="flex flex-col items-center justify-center gap-5 px-10 py-3 m-5">
        <h3 className="text-xl font-medium">Create Account</h3>
        <div className="">
          <p>Name:</p>
          <input
            name="name"
            type="text"
            value={data.name}
            onChange={handleOnChange}
            placeholder="Enter your Name"
            className="border-2 border-gray rounded-md px-5 py-2"
          />
        </div>
        <div className="">
          <p>Email:</p>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={handleOnChange}
            placeholder="Enter your Email"
            className="border-2 border-gray rounded-md px-5 py-2"
          />
        </div>
        <div className="">
          <p>Password:</p>
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={handleOnChange}
            placeholder="Enter your Password"
            className="border-2 border-gray rounded-md px-5 py-2"
          />
        </div>
        <div className="p-3 w-full">
          <p>Remember Me:</p>
          <input
            type="checkbox"
            name="rememberMe"
            value={data.rememberMe}
            onChange={handleOnChange}
            className=""
          />
        </div>
        <button className="w-full text-white bg-blue-600 p-3 rounded-md">
          Sign Up
        </button>
        <div className="mt-5">
          <p>
            Already have an account ?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={switchOnClick}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
