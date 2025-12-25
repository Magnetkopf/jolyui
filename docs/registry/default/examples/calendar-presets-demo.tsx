import { AnimatedCalendar } from "@/registry/default/ui/calender";
import { useState } from "react";

export default function CalendarPresetsDemo() {
  const [date, setDate] = useState<Date>();

  const presets = [
    {
      label: "Today",
      value: new Date(),
    },
    {
      label: "Tomorrow",
      value: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    {
      label: "Next Week",
      value: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-medium text-sm">Calendar with Presets</h3>
      <AnimatedCalendar
        mode="single"
        value={date}
        onChange={setDate}
        presets={presets}
        placeholder="Select a date"
      />
      {date && (
        <p className="text-sm text-muted-foreground">
          Selected: {date.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}