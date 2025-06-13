'use client';

function Calendar() {

	function generateTimeSlots(start, end, increment) {
		const timeSlots = [];
		for (let hour = start; hour < end; hour++) {
			timeSlots.push(`${hour}:00`);
			if (increment == 30) timeSlots.push(`${hour}:30`);
		}
		timeSlots.push(`${end}:00`); // include the last hour mark
		return timeSlots;
	}


  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const timeLabels = generateTimeSlots(8, 22, 60);
	const timeSlots = generateTimeSlots(8, 22, 30);

  return (
    <>
			<div className="grid grid-cols-[auto_1fr] text-md
											p-6 rounded-2xl bg-[#f9f9f9]">
				<div className="pt-4 px-2">
					{timeLabels.map((time, index) => (
							<div key={index}>
								<div className="py-3">
									{time}
								</div>
							</div>
					))}
				</div>

				<div className="grid w-full grid-cols-7 px-2 justify-between">
					{daysOfWeek.map((day, index) => (
						<div>
							<div key={index} className="w-full text-center text-black pb-4 border-b-2">
								{day}
							</div>
							
							{timeSlots.slice(1).map((time, index) => (
								<div key={index} className={`h-6 hover:bg-[#8e8e8e] 
																						${time.endsWith(':30') ? '' : 'border-b-2'}`}>
									
								</div>
							))}
						</div>
					))}
				</div>
			</div>
      
   	</>
  )
}
  
  export default Calendar