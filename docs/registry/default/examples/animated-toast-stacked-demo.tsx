"use client";

import { StackedNotifications, type StackedToast } from "@/registry/default/ui/animated-toast";
import { useState } from "react";

export default function AnimatedToastStackedDemo() {
  const [toasts, setToasts] = useState<StackedToast[]>([]);

  const addToast = (type: "success" | "error" | "warning" | "info" | "default") => {
    const newToast: StackedToast = {
      id: Math.random().toString(36).substr(2, 9),
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Notification`,
      message: `This is a ${type} notification that will stack with others.`,
      type,
    };
    setToasts(prev => [newToast, ...prev]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mb-4">Stacked Notifications Demo:</h3>
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => addToast("success")}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Add Success
        </button>
        <button
          onClick={() => addToast("error")}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Add Error
        </button>
        <button
          onClick={() => addToast("warning")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
        >
          Add Warning
        </button>
        <button
          onClick={() => addToast("info")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Info
        </button>
      </div>

      <p className="text-sm text-muted-foreground">
        Click buttons to add stacked notifications. They will appear in the top-right corner.
      </p>

      <StackedNotifications
        toasts={toasts}
        onRemove={removeToast}
        maxVisible={3}
      />
    </div>
  );
}