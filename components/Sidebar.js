import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/richpanel.svg";
import { useSession } from "next-auth/react";
import { FaInbox } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";

function Sidebar() {
  const { data: session, status } = useSession();
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName === selectedIcon ? null : iconName);
  };

  const getIconStyles = (iconName) => {
    return selectedIcon === iconName
      ? "bg-white text-[#014f96] rounded-md"
      : "text-white";
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="w-full h-full flex flex-col justify-start gap-5 mt-5">
        <div
          className={`w-full flex items-center justify-center p-2 cursor-pointer}`}
        >
          <GrGraphQl size={40} className="text-white" />
        </div>
        <div
          className={`w-full flex items-center justify-center p-2 cursor-pointer ${getIconStyles(
            "Inbox"
          )}`}
          onClick={() => handleIconSelect("Inbox")}
        >
          <FaInbox size={40} className="" />
        </div>
        <div
          className={`w-full flex items-center justify-center p-2 cursor-pointer ${getIconStyles(
            "Group"
          )}`}
          onClick={() => handleIconSelect("Group")}
        >
          <FaUserGroup size={40} className="" />
        </div>
        <div
          className={`w-full flex items-center justify-center p-2 cursor-pointer ${getIconStyles(
            "Analytics"
          )}`}
          onClick={() => handleIconSelect("Analytics")}
        >
          <AiOutlineStock size={40} className="" />
        </div>
      </div>
      <div className="h-full flex items-end justify-center mb-10">
        <img
          src={session?.user.image}
          alt="User Profile"
          width={60}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Sidebar;
