"use client";

import { AnimatedToastProvider, useAnimatedToast } from "@/registry/default/ui/animated-toast";

function ToastDemoContent() {
  const { addToast } = useAnimatedToast();

  const showToast = (type: "success" | "error" | "warning" | "info" | "default") => {
    addToast({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      message: `This is a ${type} notification message.`,
      type,
      duration: 4000,
    });
  };

  const showToastWithAction = () => {
    addToast({
      title: "Action Required",
      message: "This toast has an action button.",
      type: "info",
      action: {
        label: "Click me",
        onClick: () => alert("Action clicked!"),
      },
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => showToast("success")}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        Success Toast
      </button>
      <button
        onClick={() => showToast("error")}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Error Toast
      </button>
      <button
        onClick={() => showToast("warning")}
        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
      >
        Warning Toast
      </button>
      <button
        onClick={() => showToast("info")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Info Toast
      </button>
      <button
        onClick={() => showToast("default")}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
      >
        Default Toast
      </button>
      <button
        onClick={showToastWithAction}
        className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
      >
        Toast with Action
      </button>
    </div>
  );
}

export default function AnimatedToastDemo() {
  return (
    <AnimatedToastProvider position="top-right" maxToasts={3}>
      <div className="p-8">
        <h3 className="text-lg font-semibold mb-4">Click buttons to show toasts:</h3>
        <ToastDemoContent />
      </div>
    </AnimatedToastProvider>
  );
}