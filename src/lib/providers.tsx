"use client";

import { LiFiProvider } from "@/lib/lifi-provider";
import { config } from "@/lib/wagmi";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import type { CreateConnectorFn } from "wagmi";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  const connectors: CreateConnectorFn[] = [];

  return (
    <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId: "9405948e-3dc1-4402-86c1-7b8e7f88542d",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <LiFiProvider wagmiConfig={config} connectors={connectors}>
              {children}
            </LiFiProvider>
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
