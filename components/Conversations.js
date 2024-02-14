import { CgMenuLeftAlt } from "react-icons/cg";
import { IoReloadOutline } from "react-icons/io5";

function Conversations() {
  const access_token = process.env.USER_ACCESS_TOKEN;
  const handleConversation = async () => {
    const response = await fetch(
      `https://graph.facebook.com/1854128331690777/accounts?access_token=EAAKLsi3liwoBOZBgcZAZBcaOVRdek77MxUElhGkkIr7pZCCTiyohSWZCrJUIxNgJUrDrxCEZALJBL4B0BuZCrEHRIwMWdZAxDgu8vCiI4Ct4MONY17lg28ns1xItIFl2RtELIgZAQ7kM6eKgOZADTSICfFXjuaWbUNTC46QRdoHk7KeyPWU3ZB4FPx4Y1CaZByQhLjZCpzl4cT9kINeTJXD5ZAe5OXHVzcK7Ss`,
      {
        method: "GET",
      }
    );
    return response.json();
  };

  handleConversation();

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
