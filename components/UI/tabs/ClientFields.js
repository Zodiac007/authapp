import IconButton from "@/components/common/IconButton";
import InputField from "@/components/common/InputField";
import GithubIcon from "@/public/images/github-icon.svg";
import GoogleIcon from "@/public/images/google-icon.svg";
import WalletIcon from "@/public/images/wallet-icon.svg";
import EmailIcon from "@/public/images/mail-line.svg";
import TextButton from "@/components/common/TextButton";

export default function ClientFields() {
  return (
    <div className="my-4">
      <div className="mx-20">
        <IconButton src={GoogleIcon} text="Login using your Google Account" />
        <IconButton src={GithubIcon} text="Login using your Github Account" />
        <IconButton src={WalletIcon} text="Login using your Wallet" />

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
