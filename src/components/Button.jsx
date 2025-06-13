'use client'
import { useState } from 'react';

function Button() {
  
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const [selectedDays, setSelectedDays] = useState([]);
	const toggleDay = (day) => {
    setSelectedDays(prev =>
			// Remove day if already selected, add if not selected
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

	// MAKE THE OTHER ONES BESIDE DAYS ROUND AS WELL
	const getRoundedDays = (index) => {
    const day = daysOfWeek[index];
    const prevDay = daysOfWeek[index - 1];
    const nextDay = daysOfWeek[index + 1];

    const isSelected = selectedDays.includes(day);
    const prevSelected = selectedDays.includes(prevDay);
    const nextSelected = selectedDays.includes(nextDay);

    if (!isSelected) return '';

    if (!prevSelected && !nextSelected) return 'rounded-xl';
    if (!prevSelected) return 'rounded-l-xl';
    if (!nextSelected) return 'rounded-r-xl';
    return ''; // middle of a group
  };

  return (
    <div className="grid gap-2">
      <div className="flex justify-between gap-4">
        <button className="text-sm text-white bg-[#006bf9] rounded-xl hover:opacity-80">
          + Add Event
        </button>
      
				<button className="text-sm text-white bg-[#006bf9] rounded-xl hover:opacity-80">
          Export
        </button>
      </div>

			<div className="grid w-full rounded-xl bg-[#f9f9f9] 
											gap-2 p-4 shadow-md"> 
				<div className="flex justify-between">
					<input type="text" id="name" class="bg-white shadow-md
					border-[#eeeeee] text-[#808080] text-sm rounded-xl
					focus:ring-blue-500 focus:border-blue-500 p-2.5 required" 
							placeholder="Event Name" required />

					<div className = "flex">
						{daysOfWeek.map((day, index) => (
							<button
								key={day}
								onClick={() => toggleDay(day,)}
								className={`shadow-md
									${getRoundedDays(index)}
									${day == 'Sun' ? 'rounded-l-xl' : ''}
									${day == 'Sat' ? 'rounded-r-xl' : ''}
									${selectedDays.includes(day) ? 'bg-[#006bf9] text-white' : 'bg-white'}`}
							>
								{day}
							</button>
						))}
					</div>
				</div>

				<div>
				<input type="text" id="name" class="bg-white shadow-md w-full
					border-[#eeeeee] text-[#808080] text-sm rounded-xl
					focus:ring-blue-500 focus:border-blue-500 p-2.5 required" 
							placeholder="Scroll Bar Placeholder" required />
				</div>

			</div>
    </div>
  )
}

export default Button