import Chat from "@/components/Chat";
import Conversations from "@/components/Conversations";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import React from "react";

function index() {
  return (
    <div className="w-full h-screen bg-[white] flex justify-center">
      <div className="w-[5%] h-screen bg-[#014f96]">
        <Sidebar />
      </div>
      <div className="w-[22.5%] h-screen bg-[#fefffe]">
        <Conversations />
      </div>
      <div className="w-[50%] h-screen bg-[#f6f7f7]">
        <Chat />
      </div>
      <div className="w-[22.5%] h-screen bg-[#fefffe]">
        <Profile />
      </div>
    </div>
  );
}

export default index;
