import axios from "axios";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";

function Login({ switchOnClick }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: newValue });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email: data.email,
        password: data.password,
      });

      if (response.data.status) {
        const signInResult = await signIn("facebook", {
          callbackUrl: "/dashboard",
          redirect: false,
        });
        if (signInResult?.error) {
          console.error("Sign in error:", signInResult.error);
        }
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="flex flex-col items-center justify-center gap-5 px-10 py-3 m-5">
        <h3 className="text-xl font-medium">Login to your account</h3>
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
            checked={data.rememberMe}
            onChange={handleOnChange}
            className=""
          />
        </div>
        <button
          className="w-full text-white bg-blue-600 p-3 rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="mt-5">
          <p>
            New to Helpdesk ?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={switchOnClick}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
