import { DynamicWidget } from "@/lib/dynamic";
import Image from "next/image";
import { openExternalLink } from "@/lib/utils";

export default function Nav() {
  return (
    <div className="absolute top-0 flex items-center justify-between w-full p-4 border-b border-gray-200 dark:border-gray-700">
      <Image
        className="h-8 pl-4 object-contain"
        src="/logo-dark.png"
        alt="dynamic"
        width="300"
        height="60"
      />
      <div className="flex gap-3 pr-4">
        <DynamicWidget />

        <button
          className="px-5 py-2.5 rounded-xl border font-bold transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-800 text-gray-800 dark:border-white dark:text-white"
          onClick={() => openExternalLink("https://docs.dynamic.xyz")}
        >
          Docs
        </button>
        <button
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold transition-colors duration-300 hover:bg-blue-700"
          onClick={() => openExternalLink("https://app.dynamic.xyz")}
        >
          Get started
        </button>
      </div>
    </div>
  );
}
