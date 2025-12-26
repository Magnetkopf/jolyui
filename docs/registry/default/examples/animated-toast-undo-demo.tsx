"use client";

import { UndoToast } from "@/registry/default/ui/animated-toast";
import { useState } from "react";

export default function AnimatedToastUndoDemo() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("Item deleted");

  const deleteItem = () => {
    setMessage("Item deleted");
    setShowToast(true);
  };

  const undoDelete = () => {
    setMessage("Deletion undone!");
    setTimeout(() => setMessage("Item deleted"), 2000);
  };

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mb-4">Undo Toast Demo:</h3>
      <p className="mb-4 text-muted-foreground">{message}</p>

      <button
        onClick={deleteItem}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Delete Item
      </button>

      <UndoToast
        open={showToast}
        onClose={() => setShowToast(false)}
        onUndo={undoDelete}
        message="Item deleted successfully"
        duration={5000}
      />
    </div>
  );
}