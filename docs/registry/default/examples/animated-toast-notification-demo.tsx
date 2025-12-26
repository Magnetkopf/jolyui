"use client";

import { NotificationToast } from "@/registry/default/ui/animated-toast";
import { useState } from "react";

export default function AnimatedToastNotificationDemo() {
  const [showToast, setShowToast] = useState(false);

  const showNotification = () => {
    setShowToast(true);
  };

  return (
    <div className="p-8">
      <button
        onClick={showNotification}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Show Notification
      </button>

      <NotificationToast
        open={showToast}
        onClose={() => setShowToast(false)}
        title="New Message"
        message="You have received a new message from John Doe. Check it out!"
        avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        time="2 min ago"
      />
    </div>
  );
}