"use client";

import { Token } from "@lifi/sdk";

interface SimpleChain {
  id: number;
  name: string;
}

interface SwapFormProps {
  fromChain: SimpleChain | null;
  toChain: SimpleChain | null;
  fromToken: Token | null;
  toToken: Token | null;
  amount: string;
  chains: SimpleChain[];
  fromTokens: Token[];
  toTokens: Token[];
  isLoadingChains: boolean;
  isLoadingTokens: boolean;
  onFromChainChange: (chain: SimpleChain | null) => void;
  onToChainChange: (chain: SimpleChain | null) => void;
  onFromTokenChange: (token: Token | null) => void;
  onToTokenChange: (token: Token | null) => void;
  onAmountChange: (amount: string) => void;
}

export default function SwapForm({
  fromChain,
  toChain,
  fromToken,
  toToken,
  amount,
  chains,
  fromTokens,
  toTokens,
  isLoadingChains,
  isLoadingTokens,
  onFromChainChange,
  onToChainChange,
  onFromTokenChange,
  onToTokenChange,
  onAmountChange,
}: SwapFormProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Swap Configuration
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">→</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">From</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chain
              </label>
              <select
                value={fromChain?.id || ""}
                onChange={(e) => {
                  const chainId = parseInt(e.target.value);
                  const chain = chains.find((c) => c.id === chainId);
                  onFromChainChange(chain || null);
                }}
                disabled={isLoadingChains}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option value="">
                  {isLoadingChains ? "Loading chains..." : "Select chain"}
                </option>
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Token
              </label>
              <select
                value={fromToken?.address || ""}
                onChange={(e) => {
                  const token = fromTokens.find(
                    (t) => t.address === e.target.value
                  );
                  onFromTokenChange(token || null);
                }}
                disabled={!fromChain || isLoadingTokens}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option value="">
                  {isLoadingTokens ? "Loading tokens..." : "Select token"}
                </option>
                {fromTokens.map((token) => (
                  <option key={token.address} value={token.address}>
                    {token.symbol} - {token.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => onAmountChange(e.target.value)}
                  placeholder="0.0"
                  disabled={!fromToken}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-sm">←</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">To</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chain
              </label>
              <select
                value={toChain?.id || ""}
                onChange={(e) => {
                  const chainId = parseInt(e.target.value);
                  const chain = chains.find((c) => c.id === chainId);
                  onToChainChange(chain || null);
                }}
                disabled={isLoadingChains}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option value="">
                  {isLoadingChains ? "Loading chains..." : "Select chain"}
                </option>
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Token
              </label>
              <select
                value={toToken?.address || ""}
                onChange={(e) => {
                  const token = toTokens.find(
                    (t) => t.address === e.target.value
                  );
                  onToTokenChange(token || null);
                }}
                disabled={!toChain || isLoadingTokens}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option value="">
                  {isLoadingTokens ? "Loading tokens..." : "Select token"}
                </option>
                {toTokens.map((token) => (
                  <option key={token.address} value={token.address}>
                    {token.symbol} - {token.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="pt-8">
              <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                <p className="text-sm text-gray-500 text-center">
                  Select tokens to see estimated output
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
