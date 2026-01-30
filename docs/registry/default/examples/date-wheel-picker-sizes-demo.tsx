"use client";

import { useState } from "react";
import { DateWheelPicker } from "@/registry/default/ui/date-wheel-picker";

export default function DateWheelPickerSizesDemo() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-8 py-8">
      <div className="flex flex-col items-center gap-2">
        <span className="font-medium text-muted-foreground text-sm">Small</span>
        <DateWheelPicker value={date} onChange={setDate} size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="font-medium text-muted-foreground text-sm">
          Medium (default)
        </span>
        <DateWheelPicker value={date} onChange={setDate} size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="font-medium text-muted-foreground text-sm">Large</span>
        <DateWheelPicker value={date} onChange={setDate} size="lg" />
      </div>
    </div>
  );
}
