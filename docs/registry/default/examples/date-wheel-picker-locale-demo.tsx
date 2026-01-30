"use client";

import { useState } from "react";
import { DateWheelPicker } from "@/registry/default/ui/date-wheel-picker";

export default function DateWheelPickerLocaleDemo() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-8 py-8">
      <div className="flex flex-col items-center gap-2">
        <span className="font-medium text-muted-foreground text-sm">
          English (US)
        </span>
        <DateWheelPicker value={date} onChange={setDate} locale="en-US" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="font-medium text-muted-foreground text-sm">
          French
        </span>
        <DateWheelPicker value={date} onChange={setDate} locale="fr-FR" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="font-medium text-muted-foreground text-sm">
          German
        </span>
        <DateWheelPicker value={date} onChange={setDate} locale="de-DE" />
      </div>
    </div>
  );
}
