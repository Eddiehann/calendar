'use client'
import { useState } from 'react';


function Button() {
  
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const [selectedDays, setSelectedDays] = useState([]);

  // adds or removes day from state
	const toggleDay = (day) => {
    setSelectedDays(prev =>
			// Remove day if already selected, add if not selected
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const [dropDown, setDropDown] = useState(false);

	// Dynamic button group styling for days of the week
	const getRoundedDays = (index) => {
    const day = daysOfWeek[index];
    const prevDay = daysOfWeek[index - 1];
    const nextDay = daysOfWeek[index + 1];

    const isSelected = selectedDays.includes(day);
    const prevSelected = selectedDays.includes(prevDay);
    const nextSelected = selectedDays.includes(nextDay);

    if (isSelected) {
      if (!prevSelected && !nextSelected) return 'rounded-xl';    // single
      if (!prevSelected) return 'rounded-l-xl';                   // start of group
      if (!nextSelected) return 'rounded-r-xl';                   // end of group
      return '';                                                  // middle of group
    } else {
      if (prevSelected && !nextSelected) return 'rounded-l-xl';   // right edge of a group
      if (!prevSelected && nextSelected) return 'rounded-r-xl';   // left edge of a group
      if (prevSelected && nextSelected) return 'rounded-xl';      // middle of group
      return '';                                                  // outside any group
    }
  };

  return (
    <div className="grid gap-2">
      <div className="flex justify-between gap-4">
        <button 
          onClick={() => setDropDown(dropDown === true ? false : true)}
          className={`${dropDown == true ? 'bg-[#808080]' : 'hover:opacity-75'}
                      transition text-sm rounded-xl text-white bg-[#0079fa]`}>
          + Add Event
        </button>
      
				<button className="text-sm bg-[#0079fa] rounded-xl hover:opacity-75 text-white">
          Export
        </button>
      </div>

      { dropDown === true && (
			<div className="grid w-full rounded-xl bg-[#f9f9f9]
											gap-4 p-4 shadow-md transition fade-down"> 
				<section className="flex justify-between fade-down transition gap-6">
					<input type="text" id="name" class="bg-white shadow-md
					border-[#eeeeee] text-[#808080] text-sm rounded-xl w-full
					focus:ring-[#0079fa] focus:border-[#0079fa] p-2.5 required" 
							placeholder="Event Name" required />

					<div className = "flex">
						{daysOfWeek.map((day, index) => (
							<button
								key={day}
								onClick={() => toggleDay(day)}
								className={`shadow-md
									${getRoundedDays(index)}
									${day == 'Sun' ? 'rounded-l-xl' : ''}
									${day == 'Sat' ? 'rounded-r-xl' : ''}
									${selectedDays.includes(day) ? 'bg-[#0079fa] text-white' : 'bg-white'}`}
							>
								{day}
							</button>
						))}
					</div>
				</section>

        <section className="flex justify-between fade-down transition">
          <div className="flex gap-6 ">
            <input type="text" id="name" class="bg-white shadow-md
            border-[#eeeeee] text-[#808080] text-sm rounded-xl w-full flex-1
            focus:ring-[#0079fa] focus:border-[#0079fa] p-2.5 required" 
                placeholder="Start" required />
            <input type="text" id="name" class="bg-white shadow-md
            border-[#eeeeee] text-[#808080] text-sm rounded-xl w-full flex-1
            focus:ring-[#0079fa] focus:border-[#0079fa] p-2.5 required" 
                placeholder="End" required />
        
            <div className="flex justify-between items-center gap-4"> 
              <button className="circle-button shadow-md bg-[#ff313b]"></button>
              <button className="circle-button shadow-md bg-[#ff8333]"></button>
              <button className="circle-button shadow-md bg-[#ffc72e]"></button>
              <button className="circle-button shadow-md bg-[#00c155]"></button>
              <button className="circle-button shadow-md bg-[#00bbc8]"></button>
              <button className="circle-button shadow-md bg-[#0079fa]"></button>
              <button className="circle-button shadow-md bg-[#5b45ee]"></button>
              <button className="circle-button shadow-md bg-[#cb20d7]"></button>
              <button className="circle-button shadow-md bg-black"></button>
            </div>
          </div>
        </section>

        <section>
            <button className="text-sm bg-[#0079fa] rounded-xl hover:opacity-75 text-white w-full">
             + Add Event
            </button>
          </section>
			</div>)}
    </div>
  )
}

export default Button