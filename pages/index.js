import Image from "next/image";
import { Inter } from "next/font/google";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [] = useState();
  // useEffect(() => {

  // })

  const [showLogin, setShowLogin] = useState(false);

  const switchOnClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="w-screen h-screen bg-[#1e4d91]">
      <div className="w-screen h-screen flex items-center justify-center">
        {showLogin ? <Login switchOnClick={switchOnClick}/> : <Signup switchOnClick={switchOnClick}/>}
      </div>
    </div>
  );
}
