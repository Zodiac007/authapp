import Tab from "@/components/UI/tabs/Tabs";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const { query } = useRouter();

  return (
    <div className="flex w-full h-screen">
      <div className="w-2/3 flex items-center justify-center rounded-xl">
        <div className="w-2/3 bg-[#f1f1f1] border shadow-xl rounded-xl">
          <Tab />
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center border rounded-bl-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="">
          <div className="w-20 h-20 bg-white rounded-full"></div>
          <h1 className="text-white text-lg font-semibold -mx-2 my-2">
            ByteBreach
          </h1>
        </div>
      </div>
    </div>
  );
}
