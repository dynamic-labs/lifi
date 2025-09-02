"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import MultiChainSwap from "@/components/MultiChainSwap";

export default function Main() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-background text-foreground">
      <div className="absolute top-0 flex items-center justify-between w-full p-4 border-b border-border">
        {/* Light logo */}
        <Image
          className="h-8 pl-4 object-contain block dark:hidden"
          src={`/logo-dark.png`}
          alt="dynamic"
          width="300"
          height="60"
        />
        {/* Dark logo */}
        <Image
          className="h-8 pl-4 object-contain hidden dark:block"
          src={`/logo-light.png`}
          alt="dynamic"
          width="300"
          height="60"
        />
        <div className="flex gap-3 pr-4 items-center">
          <DynamicWidget />
          <ModeToggle />
          <Button
            variant="outline"
            onClick={() =>
              window.open(
                "https://docs.dynamic.xyz",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Docs
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://app.dynamic.xyz",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Get started
          </Button>
        </div>
      </div>

      <MultiChainSwap />
      <footer className="text-center text-sm text-muted-foreground py-4 border-t border-border mt-4">
        <p>
          Made with 💙 by{" "}
          <a
            href="https://dynamic.xyz"
            className="text-primary hover:underline"
          >
            Dynamic
          </a>
        </p>
      </footer>
    </div>
  );
}
