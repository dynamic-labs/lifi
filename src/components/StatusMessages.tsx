"use client";

import { getExplorerUrl } from "@/lib/utils";

interface StatusMessagesProps {
  error: string | null;
  txHash: string | null;
  chainId?: number;
}

export default function StatusMessages({
  error,
  txHash,
  chainId,
}: StatusMessagesProps) {
  return (
    <>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-900">Error</h3>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {txHash && (
        <div className="bg-green-50 border border-green-200 rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                Swap Executed Successfully!
              </h3>
              <p className="text-green-700 mt-1">
                {txHash === "Execution completed" ? (
                  "Route execution has been completed successfully."
                ) : (
                  <>
                    Transaction:{" "}
                    {(() => {
                      const explorerUrl = getExplorerUrl(txHash, chainId);
                      if (explorerUrl) {
                        return (
                          <a
                            href={explorerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                          >
                            {txHash.slice(0, 10)}...{txHash.slice(-8)}
                          </a>
                        );
                      }
                      return txHash;
                    })()}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
