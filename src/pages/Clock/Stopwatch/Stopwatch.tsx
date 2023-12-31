import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const Stopwatch = () => {
  const [time, setTime] = useState<number | null>(0);
  const [timer, setTimer] = useState<boolean | number>(false);

  useEffect(() => {
    let intervalId: number | undefined;
    if (timer) {
      intervalId = setInterval(() => {
        setTime((prevTime) => (prevTime ?? 0) + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  const handleStartStopwatch = () => {
    setTimer(timer === false ? Date.now() : timer);
  };

  const handlePauseStopwatch = () => {
    setTimer(false);
  };

  const handleResetStopwatch = () => {
    setTime(0);
    setTimer(false);
  };

  const formatTime = (milliseconds: number | null) => {
    if (milliseconds === null) {
      return "00:00:00.000";
    }

    const totalMilliseconds = milliseconds;
    const millisecondsPart = Math.floor(totalMilliseconds % 1000);
    const seconds = Math.floor((totalMilliseconds / 1000) % 60);
    const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${millisecondsPart.toString().padStart(3, "0")}`;
  };

  return (
    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0 bg-gradient-to-b from-white to-blue-500">
      <div className=" space-y-4 h md:space-y-6 sm:p-8">
        <div className="flex gap-10 h-52 justify-center flex-col items-center md:h-58 ">
          <h1 className="text-4xl font-bold">{formatTime(time)}</h1>
          <div className="flex gap-3">
            {typeof timer === "number" && timer > 0 ? (
              <>
                <Button color={"bg-red-600"} onClick={handlePauseStopwatch}>
                  Pause
                </Button>
                <Button color={"bg-amber-600"} onClick={handleResetStopwatch}>
                  Reset
                </Button>
              </>
            ) : (
              <Button color={"bg-green-600"} onClick={handleStartStopwatch}>
                Start
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
