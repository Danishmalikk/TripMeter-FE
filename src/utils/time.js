import React, { useEffect, useState } from 'react';

export function Time() {
    // Initialize state for the time value
    const [timeValue, setTimeValue] = useState('');
  
    // useEffect hook to update the time value when the component mounts
    useEffect(() => {
      // Function to get the current time in HH:MM format
      const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      };
  
      // Set the time value when the component mounts
      setTimeValue(getCurrentTime());
    }, []); // Empty dependency array ensures this effect runs only once
  
    // Event handler to update the time value when the input changes
    const handleTimeChange = (event) => {
      setTimeValue(event.target.value);
    };
  
    return (
      <div>
        {/* Input field with today's time */}
        <input
        className="w-[31rem] border-b-2 border-input-border outline-none bg-inherit"
          type="time"
          value={timeValue}
          onChange={handleTimeChange}
        />
      </div>
    );
  }


function DateAuto() {
  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().substr(0, 10);

  // Initialize state for the input field
  const [dateValue, setDateValue] = useState(today);

  // Event handler to update the date value when the input changes
  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  return (
    <div className=''>
      {/* Input field with today's date */}
      <input className="w-[31rem] border-b-2 border-input-border outline-none bg-inherit"
        type="date"
        value={dateValue}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DateAuto;
