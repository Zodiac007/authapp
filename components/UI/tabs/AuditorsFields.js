import IconButton from "@/components/common/IconButton";
import InputField from "@/components/common/InputField";
import TextButton from "@/components/common/TextButton";

import GoogleIcon from "@/public/images/google-icon.svg";
import EmailIcon from "@/public/images/mail-line.svg";
import Link from "next/link";

export default function AuditorsFields() {
  return (
    <div className="my-4">
      <div className="mx-20">
        <IconButton src={GoogleIcon} text="Login using your Google Account" />

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
