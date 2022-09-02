import { useState } from 'react';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function CalendarTw() {
  const [year, setYear] = useState(2022);
  const previousYear = () => setYear((year) => year - 1);
  const nextYear = () => {
    console.log('hi there');
    setYear(1);
  };
  return (
    <div className="h-44 border w-52 p-1 gap-5 bg-white">
      <section className="grid grid-rows-[30px_1fr] border">
        <div className="flex justify-center items-center gap-2">
          <span className="text-xl" onClick={() => setYear((year) => year - 1)}>
            lasdfasdf
          </span>{' '}
          <div onClick={() => console.log('hello')}>{year}</div>
          <span onClick={nextYear}>r</span>
        </div>
      </section>
      <section className="border p-2 flex grid grid-cols-4 gap-2">
        {months.map((item) => (
          <span key={item} className="border p-1 rounded cursor-pointer">
            {item}
          </span>
        ))}
      </section>
    </div>
  );
}

export default CalendarTw;
