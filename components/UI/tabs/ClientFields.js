import IconButton from "@/components/common/IconButton";
import InputField from "@/components/common/InputField";
import GithubIcon from "@/public/images/github-icon.svg";
import GoogleIcon from "@/public/images/google-icon.svg";
import WalletIcon from "@/public/images/wallet-icon.svg";
import EmailIcon from "@/public/images/mail-line.svg";
import TextButton from "@/components/common/TextButton";
import { useWeb3 } from "@3rdweb/hooks";
import { useSession, signIn, signOut } from "next-auth/react"



export default function ClientFields() {
  const { data: session } = useSession()
  const {address, chainId, connectWallet} = useWeb3();
  console.log(session);

  function connectwithWallet(){
    if(window.ethereum){
    connectWallet("injected")
    }
    else{
      console.log("get metamask")
      alert("Get MetaMask Wallet first.")
    }

  }

  


  return (
    <div className="my-4">
      <div className="mx-20">
        <IconButton onClick={() => signIn()}  src={GoogleIcon} text="Login using your Google Account" />
        <IconButton src={GithubIcon} text="Login using your Github Account" />
        <IconButton onClick={() => connectwithWallet()}  src={WalletIcon} text="Login using your Wallet" />
        {address ?
   
        <div>
          <p>Address: {address}</p>
          <p>ChainId: {chainId}</p>
        </div>
        
        : ""}
        {session ?
   
          <div>
            <p>Email: {session.user.email}</p>
            <button onClick={() => signOut()} >logout</button>
          </div>
          
          : ""}
    
  

        <div>
          <InputField
            src={EmailIcon}
            label={"Email"}
            placeholder={"Email Address"}
          />
        </div>

        <TextButton text={"Submit"} href="/dashboard" />
      </div>
    </div>
  );
}
