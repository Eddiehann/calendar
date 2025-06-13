'use client';

function Calendar() {

	// generates time slots given start and end, can increment by 30 or 60 (default) minutes
	const generateTimeSlots = (start, end) => {
		const timeSlots = [];
		for (let hour = start; hour < end; hour++) {
			timeSlots.push(hour*100);
			timeSlots.push(hour*100+30);
		}
		timeSlots.push(end*100); // include the last hour mark
		return timeSlots;
	}

	const isSlotActive = (day, time, event) => {
		return (
			event.days.includes(day) &&
			time > event.start &&
			time <= event.end
		);
	};

	const isStart = (day, time, event) => {
		return (
			event.days.includes(day) &&
			(time == (event.start + 70) || time == (event.start + 30))
		);
	};

	const isEnd = (day, time, event) => {
		return (
			event.days.includes(day) &&
			time == event.end
		);
	};

	// this needs to be replaced with sql
	// strings can be compared as they are in lexicographic order
	const events = [
		{
			name: 'CPSC 110',
			days: ['Mon', 'Wed', 'Fri'],
			start: 1130,
			end: 1400,
			color: '',
		},
		{
			name: 'CPSC 121',
			days: ['Tue', 'Thu'],
			start: 1300,
			end: 1530,
			color: '',
		},
		{
			name: '121 lab',
			days: ['Tue', 'Thu'],
			start: 1630,
			end: 1830,
			color: '',
		},
	]

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const timeLabels = ['8:00', '9:00', '10:00', '11:00', '12:00',
											'13:00', '14:00', '15:00', '16:00', '17:00',
											'18:00', '19:00', '20:00', '21:00', '22:00']
	const timeSlots = generateTimeSlots(8, 22, 30);

  return (
		<div className="grid grid-cols-[auto_1fr] text-md
										p-6 rounded-xl bg-[#f9f9f9] shadow-md">
			<div className="pt-4 px-2">
				{timeLabels.map((time, index) => (
						<div key={index}>
							<div className="py-3 text-end">
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
							
						{timeSlots.slice(1).map((time, index) => {
							
							// find event that takes up the current timeslot
							const currEvent = events.find(event => isSlotActive(day, time, event))
							const hasEvent = Boolean(currEvent);
							const isEventStart = hasEvent && isStart(day, time, currEvent);
							const isEventEnd = hasEvent && isEnd(day, time, currEvent);

							return( 
								<div key={index}
								className={`h-6 flex items-center justify-center text-white text-sm opacity-80
													${time % 100 == 30 || currEvent ? '' : 'border-b-2'} 
													${hasEvent ? 'bg-[#006bf9]' : ''}
													${isEventStart ? 'rounded-t-xl' : ''}
													${isEventEnd ? 'rounded-b-xl' : ''}`}>
									{isEventStart ? currEvent.name : ''}
								</div>
						)})}
					</div>
				))}
			</div>
		</div>
  )
}
  
  export default Calendar