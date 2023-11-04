import InputField from "@/components/common/InputField";
import TextButton from "@/components/common/TextButton";
import EmailIcon from "@/public/images/mail-line.svg";

export default function ContactDetailForm() {
  return (
    <div className="mx-20 my-4">
      <div className="my-6">
        <h2 className="text-lg font-semibold">Contact Details</h2>
      </div>
      <InputField
        src={EmailIcon}
        label={"Full Name"}
        placeholder={"Email Address"}
      />

      <InputField
        src={EmailIcon}
        label={"Company Name"}
        placeholder={"Your Company Name"}
      />

      <InputField
        src={EmailIcon}
        label={"Website"}
        placeholder={"Your Website"}
      />

      <div>
        <InputField
          src={EmailIcon}
          label={"Twitter"}
          placeholder={"Your Website"}
        />
        <InputField
          src={EmailIcon}
          label={"Github"}
          placeholder={"Your Website"}
        />
      </div>

      <div>
        <InputField
          src={EmailIcon}
          label={"Invite Code"}
          placeholder={"1234"}
        />
      </div>
      <TextButton text={"Submit"} href="/dashboard" />
    </div>
  );
}
