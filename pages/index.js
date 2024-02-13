import Image from "next/image";
import { Inter } from "next/font/google";
import Signup from "@/components/Signup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[blue]">
      <div className="w-screen h-screen flex items-center justify-center">
        <Signup />
      </div>
    </div>
  );
}
