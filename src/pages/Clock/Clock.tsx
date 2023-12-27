import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState<string | number>("");
  const [month, setMonth] = useState<string | number>("");
  const [year, setYear] = useState<string | number>("");
  const [hours, setHours] = useState<string | any>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setDate(d.getDate());
      setMonth(d.getMonth());
      setYear(d.getFullYear());
      setHours(d.getHours().toString());

      setMinutes(() => {
        if (d.getMinutes() < 10) {
          return `0${d.getMinutes()}`;
        } else {
          return d.getMinutes().toString();
        }
      });

      setSeconds(() => {
        if (d.getSeconds() < 10) {
          return `0${d.getSeconds()}`;
        } else {
          return d.getSeconds().toString();
        }
      });
    };

    setInterval(updateTime, 1000);
    updateTime();
  }, [hours, minutes, seconds]);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
      <div className=" space-y-4 md:space-y-6 sm:p-8">
        <div className="flex gap-10 justify-between flex-col items-center py-5">
          <h1 className="text-3xl font-bold ">
            {hours < 10 ? `${hours % 12}` : `0${hours % 12}`}:{minutes}:
            {seconds} {hours < 12 ? "AM" : "PM"}
          </h1>
          <h1>
            {month}/{date}/{year}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Clock;
