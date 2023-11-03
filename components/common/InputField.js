import Image from "next/image";

export default function InputField({ src, label, placeholder }) {
  return (
    <>
      <label
        for="email"
        class="block text-sm font-medium leading-9 text-gray-900"
      >
        {label}
      </label>

      <div class="relative">
        <input
          name="email"
          type="text"
          class="pl-10 pr-4 py-3 border rounded-full w-full shadow"
          placeholder={placeholder}
        />
        <div
          class="absolute inset-y-0 right-0 pr-8 
                      flex items-center  
                      pointer-events-none"
        >
          <Image src={src} width={16} height={16} alt="icon" />
        </div>
      </div>
    </>
  );
}
