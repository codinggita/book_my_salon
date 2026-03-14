import React, { useState } from 'react';
import { Sunrise } from 'lucide-react';

const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 14; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        dates.push({
            id: i,
            date: date,
            dayName: i === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' }),
            dayNumber: date.getDate(),
            fullDate: date.toISOString().split('T')[0]
        });
    }
    return dates;
};

const generateTimes = () => {
    const times = [];
    // 10:00 AM to 8:00 PM
    let startTime = 10 * 60; 
    let endTime = 20 * 60; 
    for (let current = startTime; current <= endTime; current += 30) {
        const hours = Math.floor(current / 60);
        const mins = current % 60;
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 === 0 ? 12 : hours % 12;
        const displayMins = mins.toString().padStart(2, '0');
        times.push(`${displayHours.toString().padStart(2, '0')}:${displayMins} ${period}`);
    }
    return times;
};

const Booking = () => {
    const dates = generateDates();
    const times = generateTimes();
    const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);
    const [selectedTime, setSelectedTime] = useState('12:30 PM');

    return (
        <div className="bg-[#fbfcff] p-6 sm:p-8 rounded-3xl shadow-sm h-full flex flex-col gap-6">
            <h1 className="text-[22px] font-semibold text-gray-800">Select Date & Time</h1>
            
            {/* Dates List */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2 -mx-2 px-2">
                {dates.map((d, index) => {
                    const isSelected = selectedDate === d.fullDate;
                    return (
                        <button 
                            key={d.id}
                            onClick={() => setSelectedDate(d.fullDate)}
                            className={`flex flex-col items-center justify-center min-w-[76px] h-[96px] rounded-[24px] transition-all duration-200 border bg-white cursor-pointer select-none
                                ${isSelected 
                                    ? 'border-transparent shadow-[0_4px_20px_-4px_rgba(249,115,22,0.3)] ring-1 ring-primary bg-orange-50/10' 
                                    : 'border-transparent shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)] hover:border-gray-200 hover:shadow-md'
                                }`}
                        >
                            <span className={`text-[15px] mb-1 font-medium ${isSelected ? 'text-gray-800' : 'text-gray-500'}`}>
                                {d.dayName}
                            </span>
                            
                            {index === 0 ? (
                                <Sunrise size={22} className={`mt-[2px] ${isSelected ? 'text-gray-800' : 'text-gray-600'}`} strokeWidth={2.5} />
                            ) : (
                                <span className={`text-[22px] font-semibold leading-none mt-1 ${isSelected ? 'text-gray-800' : 'text-gray-700'}`}>
                                    {d.dayNumber}
                                </span>
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Times List */}
            <div className="flex flex-wrap gap-x-4 gap-y-4 mt-2">
                 {times.map((t) => {
                    const isSelected = selectedTime === t;
                    return (
                        <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`px-6 py-[14px] rounded-2xl text-[15px] font-medium transition-all duration-200 border bg-white cursor-pointer select-none
                                ${isSelected 
                                    ? 'border-transparent text-primary shadow-[0_4px_16px_-4px_rgba(249,115,22,0.25)] ring-1 ring-primary bg-orange-50/10' 
                                    : 'border-transparent text-gray-700 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)] hover:border-gray-200 hover:shadow-md'
                                }`}
                        >
                            {t}
                        </button>
                    )
                 })}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                 <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-2xl font-semibold shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2">
                     Continue to Details
                 </button>
            </div>
        </div>
    );
};

export default Booking;
