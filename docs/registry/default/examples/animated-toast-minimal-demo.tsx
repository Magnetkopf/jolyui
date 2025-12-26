"use client";

import { MinimalToast } from "@/registry/default/ui/animated-toast";
import { useState } from "react";

export default function AnimatedToastMinimalDemo() {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (type: "success" | "error" | "warning" | "info" | "default") => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mb-4">Minimal Toast Demo:</h3>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => triggerToast("success")}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Success
        </button>
        <button
          onClick={() => triggerToast("error")}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Error
        </button>
        <button
          onClick={() => triggerToast("warning")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
        >
          Warning
        </button>
        <button
          onClick={() => triggerToast("info")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Info
        </button>
        <button
          onClick={() => triggerToast("default")}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          Default
        </button>
      </div>

      <MinimalToast
        open={showToast}
        onClose={() => setShowToast(false)}
        message="This is a minimal toast notification!"
        type="success"
      />
    </div>
  );
}