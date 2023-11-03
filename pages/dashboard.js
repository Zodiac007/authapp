import TextButton from "@/components/common/TextButton";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Hello Dashboard</h1>

      <TextButton text="Home" href="/" />
    </div>
  );
}
