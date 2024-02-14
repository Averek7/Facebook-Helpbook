import React from "react";
import { useSession } from "next-auth/react";

function Chat() {
  const { data: session, status } = useSession();

  return (
    <div className="w-full">
      <div className="h-auto overflow-y-auto">

      </div>
      <div className="w-[50%] h-auto absolute bottom-5 z-50 p-5">
        <input
          type=""
          name=""
          value=""
          placeholder={`Message ${session?.user.name}`}
          className="w-full p-5 rounded-md placeholder:text-lg placeholder:font-semibold border-[1px] border-[#014f96]"
        />
      </div>
    </div>
  );
}

export default Chat;
