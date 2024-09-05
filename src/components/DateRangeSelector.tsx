import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { FaAngleDown } from "react-icons/fa";

export const DateRangeSelector = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: "selection",
  });

  // Toggle date picker visibility
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  // Handle date range change
  const handleSelect = (ranges: any) => {
    setSelectedRange(ranges.selection);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB"); // Use en-GB for consistent dd/mm/yyyy format
  };

  return (
    <div className="date-range-selector">
      {/* Button to open date range picker */}
      <button
        className="flex cursor-pointer items-center gap-1 rounded-md bg-blue-900 px-2 py-2 text-white"
        onClick={toggleDatePicker}
      >
        <p>
          {`${formatDate(selectedRange.startDate)} - ${formatDate(
            selectedRange.endDate,
          )}`}
        </p>
        <FaAngleDown />
      </button>

      {/* Render date range picker only when the button is clicked */}
      {showDatePicker && (
        <div className="absolute z-50 mt-2">
          <DateRangePicker
            ranges={[selectedRange]}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            months={2}
            direction="horizontal"
            className="shadow-lg"
          />
        </div>
      )}
    </div>
  );
};
