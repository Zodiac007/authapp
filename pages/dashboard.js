import { useSession } from "next-auth/react";
import TextButton from "@/components/common/TextButton";

export default function Dashboard() {
  // const { session } = useSession();

  // console.log("session", session);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Hello Dashboard</h1>

      <TextButton text="Home" href="/" />
    </div>
  );
}
