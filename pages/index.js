import Image from "next/image";
import { Inter } from "next/font/google";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const switchOnClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="w-[100%] h-screen bg-[#1e4d91]">
      <div className="w-full h-full flex items-center justify-center">
        {showLogin ? (
          <Login switchOnClick={switchOnClick} />
        ) : (
          <Signup switchOnClick={switchOnClick} />
        )}
      </div>
    </div>
  );
}
