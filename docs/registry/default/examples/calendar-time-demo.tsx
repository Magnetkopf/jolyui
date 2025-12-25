import { AnimatedCalendar } from "@/registry/default/ui/calender";
import { useState } from "react";

export default function CalendarTimeDemo() {
  const [dateTime, setDateTime] = useState<Date>();

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-medium text-sm">Date & Time Selection</h3>
      <AnimatedCalendar
        mode="single"
        value={dateTime}
        onChange={setDateTime}
        showTime
        placeholder="Select date and time"
      />
      {dateTime && (
        <p className="text-sm text-muted-foreground">
          Selected: {dateTime.toLocaleString()}
        </p>
      )}
    </div>
  );
}