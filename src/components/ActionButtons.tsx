"use client";

interface ActionButtonsProps {
  isLoading: boolean;
  isExecuting: boolean;
  hasRoutes: boolean;
  hasSelectedRoute: boolean;
  isFormValid: boolean;
  onGetRoutes: () => void;
  onExecuteSwap: () => void;
  onClear: () => void;
}

export default function ActionButtons({
  isLoading,
  isExecuting,
  hasRoutes,
  hasSelectedRoute,
  isFormValid,
  onGetRoutes,
  onExecuteSwap,
  onClear,
}: ActionButtonsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={onGetRoutes}
          disabled={isLoading || !isFormValid}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
            isLoading || !isFormValid
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Getting Routes...</span>
            </div>
          ) : (
            "Get Routes"
          )}
        </button>

        {hasRoutes && !isExecuting && (
          <button
            onClick={onExecuteSwap}
            disabled={isLoading || !hasSelectedRoute}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
              isLoading || !hasSelectedRoute
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Executing...</span>
              </div>
            ) : (
              "Execute Swap"
            )}
          </button>
        )}

        {(hasRoutes || isExecuting) && (
          <button
            onClick={onClear}
            className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
