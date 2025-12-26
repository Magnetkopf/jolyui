"use client";

import { AnimatedToastProvider, usePromiseToast } from "@/registry/default/ui/animated-toast";
import { useState } from "react";

function PromiseToastDemoContent() {
  const promiseToast = usePromiseToast();
  const [result, setResult] = useState<string>("");

  const simulateAsyncOperation = (shouldSucceed: boolean): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Operation completed successfully!");
        } else {
          reject(new Error("Operation failed!"));
        }
      }, 2000);
    });
  };

  const handleSuccess = async () => {
    try {
      const data = await promiseToast({
        promise: simulateAsyncOperation(true),
        loading: "Processing your request...",
        success: (result) => `Success: ${result}`,
        error: (err) => `Error: ${err.message}`,
      });
      setResult(data);
    } catch (error) {
      // Error already handled by toast
    }
  };

  const handleError = async () => {
    try {
      const data = await promiseToast({
        promise: simulateAsyncOperation(false),
        loading: "Processing your request...",
        success: (result) => `Success: ${result}`,
        error: (err) => `Error: ${err.message}`,
      });
      setResult(data);
    } catch (error) {
      // Error already handled by toast
    }
  };

  return (
    <div className="p-8">
      <p className="mb-4 text-muted-foreground">
        Click buttons to simulate async operations with toast feedback.
      </p>

      <div className="flex flex-wrap gap-4 mb-4">
        <button
          onClick={handleSuccess}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Simulate Success
        </button>
        <button
          onClick={handleError}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Simulate Error
        </button>
      </div>

      {result && (
        <div className="p-4 bg-muted rounded-md">
          <p className="text-sm font-medium">Result:</p>
          <p className="text-sm text-muted-foreground">{result}</p>
        </div>
      )}
    </div>
  );
}

export default function AnimatedToastPromiseDemo() {
  return (
    <AnimatedToastProvider position="top-center">
      <PromiseToastDemoContent />
    </AnimatedToastProvider>
  );
}