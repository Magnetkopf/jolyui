import { AnimatedCalendar } from "@/registry/default/ui/calender";
import { useState } from "react";

export default function CalendarConstraintsDemo() {
  const [date, setDate] = useState<Date>();

  // Disable weekends and past dates
  const disabledDates = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0 || date.getDay() === 6;
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-medium text-sm">Calendar with Constraints</h3>
      <p className="text-xs text-muted-foreground">
        Weekends and past dates are disabled
      </p>
      <AnimatedCalendar
        mode="single"
        value={date}
        onChange={setDate}
        disabled={disabledDates}
        placeholder="Select a weekday"
      />
      {date && (
        <p className="text-sm text-muted-foreground">
          Selected: {date.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}