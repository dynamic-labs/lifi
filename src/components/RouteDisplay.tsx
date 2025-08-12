"use client";

import { Route } from "@lifi/sdk";
import { formatAmount } from "@/lib/utils";

interface RouteDisplayProps {
  routes: Route[];
  selectedRoute: Route | null;
  toTokenSymbol?: string;
  onRouteSelect: (route: Route) => void;
}

export default function RouteDisplay({
  routes,
  selectedRoute,
  toTokenSymbol,
  onRouteSelect,
}: RouteDisplayProps) {
  if (routes.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Available Routes ({routes.length})
      </h3>

      <div className="space-y-4">
        {routes.map((route, index) => {
          const isSelected = selectedRoute?.id === route.id;
          const estimatedTime = Math.ceil(
            route.steps.reduce(
              (acc, step) => acc + (step.estimate.executionDuration || 0),
              0
            ) / 60
          );

          return (
            <div
              key={route.id}
              onClick={() => onRouteSelect(route)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-lg"
                  : "border-gray-200 hover:border-gray-300 bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isSelected
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    Route {index + 1}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 bg-gray-100 rounded-full">
                    <span className="text-sm text-gray-600">
                      ~{estimatedTime} min
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">You get:</span>
                  <span className="font-medium text-gray-900">
                    {formatAmount(route.toAmount, route.toToken.decimals)}{" "}
                    {toTokenSymbol || route.toToken.symbol}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Steps:</span>
                  <span className="text-sm text-gray-500">
                    {route.steps.length} step{route.steps.length > 1 ? "s" : ""}{" "}
                    via {route.steps.map((step) => step.tool).join(" → ")}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Gas cost:</span>
                  <span className="text-sm text-gray-500">
                    ~${route.gasCostUSD || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
