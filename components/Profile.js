import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Profile() {
  return (
    <div className="h-full flex flex-col items-center bg-[#eef2f6]">
      <div className="w-full h-auto flex flex-col items-center justify-center bg-[#fefffe] pt-10 pb-10 gap-4">
        <div>
          <img src={""} width={100} height={100} className="rounded-full" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-2xl">Name</p>
          <p className="">Online</p>
        </div>
        <div className="w-full flex items-center justify-center gap-2 px-5">
          <button className="w-full flex items-center justify-center gap-2 text-lg border-solid border-[1px] mx-5 p-1">
            <MdLocalPhone />
            Call
          </button>
          <button className="w-full flex items-center justify-center gap-2 text-lg border-solid border-[1px] mx-5 p-1">
            <CgProfile />
            Profile
          </button>
        </div>
      </div>
      <div className="w-full h-auto m-5 p-5 rounded-md">
        <div className="bg-[#fefffe] p-5">
          <p className="text-xl font-medium">Customer Details</p>
          <div className="w-full flex flex-col items-center justify-center p-2 gap-3">
            <div className="w-full flex items-center justify-between text-lg">
              <p>Email: </p>
              <p>abc@gmail.com</p>
            </div>
            <div className="w-full flex items-center justify-between text-lg">
              <p>First Name: </p>
              <p></p>
            </div>
            <div className="w-full flex items-center justify-between text-lg">
              <p>Last Name: </p>
              <p></p>
            </div>
          </div>
          <p className="text-[#014f96] text-lg cursor-pointer hover:underline">
            View more details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
