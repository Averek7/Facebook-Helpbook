import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoReloadOutline } from "react-icons/io5";

function Conversations() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mx-2 mt-5 ">
        <div className="flex items-center justify-center gap-2">
          <CgMenuLeftAlt size={30} className="cursor-pointer" />
          <div className="text-2xl font-semibold">Conversations</div>
        </div>
        <div className="mr-2">
          <IoReloadOutline size={30} className="cursor-pointer" />
        </div>
      </div>

      <div className="" />

      <div className="h-auto overflow-y-auto"></div>
    </div>
  );
}
// #eceef1
// #fefffe
export default Conversations;
