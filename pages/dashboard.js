import { useSession, signOut } from "next-auth/react";
import TextButton from "@/components/common/TextButton";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWeb3 } from "@3rdweb/hooks";

export default function Dashboard() {
  const router = useRouter(); // Add this line
  const { data: session } = useSession();
  const { address, disconnectWallet } = useWeb3();
  console.log(session)

  function handleSignOut(){
    if(session){
      signOut();
    }
    else if(address){
      disconnectWallet();
    }
  }
  useEffect(() => {
    if(!session && !address){
      router.push("/");
    }
  },[session , address])
  // const { session } = useSession();

  // console.log("session", session);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Hello {address ? address : session && session.user.email}</h1>

      <TextButton text="Home" href="/" />
      {session ?
      <TextButton onClick={() => handleSignOut()} text="logout" />
      : ""  }
    </div>
  );
}
