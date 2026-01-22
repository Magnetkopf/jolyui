"use client";

import { PromptInputBox } from "@/registry/default/ui/ai-prompt-box";
import { useState } from "react";

export default function AiPromptBoxLoadingDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = (message: string) => {
    setIsLoading(true);
    console.log("Sending:", message);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center">
      <PromptInputBox
        onSend={handleSend}
        isLoading={isLoading}
        placeholder="Send a message to see loading state..."
      />
    </div>
  );
}
