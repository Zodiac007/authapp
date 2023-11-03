import Image from "next/image";

export default function IconButton({ text, src }) {
  return (
    <button className="w-full py-3 px-6 my-2 bg-white rounded-full shadow">
      <div className="flex items-center mx-20 text-left">
        <Image src={src} alt={text} width={20} height={20} />
        <span className="mx-4 text-sm font-semibold">{text}</span>
      </div>
    </button>
  );
}
